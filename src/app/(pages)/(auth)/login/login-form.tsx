"use client";

import { Button, Input, Label } from "@/components/ui";
import { useToast } from "@/hooks/use-toast";
import { loginAction } from "@/server/actions/auth";
import { useTranslations } from "next-intl";
import Form from "next/form";
import { useActionState, useEffect } from "react";

export function LoginForm() {
  const t = useTranslations("Pages.Login.Form");

  const { toast } = useToast();
  const [state, dispatch, isPending] = useActionState(loginAction, null);

  useEffect(() => {
    if (state && !state.success && state.message) {
      toast({
        title: "Error",
        description: t(state.message),
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <Form action={dispatch} className="flex flex-col gap-y-8">
      <div className="flex flex-col gap-y-1">
        <Label htmlFor="email">{t('email')}</Label>
        <Input id="email" name="email" type="email" />
      </div>

      <div className="flex flex-col gap-y-1">
        <Label htmlFor="password">{t('password')}</Label>
        <Input id="password" name="password" type="password" />
      </div>

      <Button type="submit" aria-busy={isPending} aria-disabled={isPending}>{t('submit')}</Button>
    </Form>
  );
}
