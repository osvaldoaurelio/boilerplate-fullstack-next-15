"use client";

import { Button, Input, Label } from "@/components/ui";
import { NAME, PASSWORD } from "@/constants/auth";
import { useToast } from "@/hooks/use-toast";
import { registerAction } from "@/server/actions/auth";
import { ActionState } from "@/types/auth";
import { RegisterInput } from "@/validations/auth";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Form from "next/form";
import { useActionState, useEffect, useState } from "react";

const INITIAL_STATE: ActionState<RegisterInput> = {
  data: { name: '', email: '', password: '' },
  message: null,
  errors: null,
};

export function RegisterForm() {
  const { toast } = useToast();
  const t = useTranslations("Pages.Register.Form");
  const [showPassword, setShowPassword] = useState(false);
  const [state, action, isPending] = useActionState(registerAction, INITIAL_STATE);

  const { name, email, password } = state?.data || {};

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  useEffect(() => {
    if (state?.errors && state?.message) {
      toast({
        description: t(state.message),
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <Form action={action} className="flex flex-col gap-y-8">
      <div className="flex flex-col gap-y-1">
        <Label htmlFor="name">{t('name')}</Label>
        <Input id="name" name="name" type="text" defaultValue={name} />
        {state.errors?.name && (
          <p className="text-xs text-red-500">
            {t(state.errors.name[0], { ...NAME })}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-y-1">
        <Label htmlFor="email">{t('email')}</Label>
        <Input id="email" name="email" type="email" defaultValue={email} />
        {state.errors?.email && (
          <p className="text-xs text-red-500">
            {t(state.errors.email[0])}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-y-1">
        <Label htmlFor="password">{t('password')}</Label>
        <div className="relative">
          <Input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            className="pr-8"
            defaultValue={password}
          />
          <div className="flex-col-center h-8 w-8 absolute right-0 bottom-0.5" onClick={togglePasswordVisibility}>
            {showPassword ? <EyeIcon /> : <EyeOffIcon />}
          </div>
        </div>
        {state.errors?.password && (
          <p className="text-xs text-red-500">
            {t(state.errors.password[0], { ...PASSWORD })}
          </p>
        )}
      </div>

      <Button type="submit" aria-disabled={isPending}>{t('submit')}</Button>
    </Form>
  );
}
