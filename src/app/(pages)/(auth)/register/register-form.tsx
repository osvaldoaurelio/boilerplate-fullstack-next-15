"use client";

import { Button, Input, Label } from "@/components/ui";
import { useToast } from "@/hooks/use-toast";
import { registerAction } from "@/server/actions/auth";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Form from "next/form";
import { useActionState, useEffect, useState } from "react";

export function RegisterForm() {
  const { toast } = useToast();
  const t = useTranslations("Pages.Register.Form");
  const [showPassword, setShowPassword] = useState(false);
  const [state, dispatch, isPending] = useActionState(registerAction, null);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  useEffect(() => {
    if (!state?.success && state?.message) {
      toast({
        description: t(state.message),
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <Form action={dispatch} className="flex flex-col gap-y-8">
      <div className="flex flex-col gap-y-1">
        <Label htmlFor="name">{t('name')}</Label>
        <Input id="name" name="name" type="text" />
      </div>

      <div className="flex flex-col gap-y-1">
        <Label htmlFor="email">{t('email')}</Label>
        <Input id="email" name="email" type="email" />
      </div>

      <div className="flex flex-col gap-y-1">
        <Label htmlFor="password">{t('password')}</Label>
        <div className="relative">
          <Input id="password" name="password" type={showPassword ? 'text' : 'password'} className="pr-8" />
          <div className="flex-col-center h-8 w-8 absolute right-0 bottom-0.5" onClick={togglePasswordVisibility}>
            {showPassword ? <EyeIcon /> : <EyeOffIcon />}
          </div>
        </div>
      </div>

      <Button type="submit" aria-disabled={isPending}>{t('submit')}</Button>
    </Form>
  );
}
