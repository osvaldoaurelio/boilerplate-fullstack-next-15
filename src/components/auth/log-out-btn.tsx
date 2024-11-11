"use client"

import { Button } from "@/components/ui";
import { useToast } from "@/hooks/use-toast";
import { logoutAction } from "@/server/actions/auth";
import { EllipsisIcon, LogOutIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LogOutBtn() {
  const t = useTranslations('LogOutBtn');
  const router = useRouter();
  const { toast } = useToast();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const onClickHandle = async () => {
    setIsLoggingOut(true);

    try {
      await logoutAction();
    } catch (err) {
    } finally {
      setIsLoggingOut(false);
      router.replace('/');
      toast({ description: t('Toast.success') });
    }
  };

  return (
    <Button
      onClick={onClickHandle}
      variant="destructive"
      aria-label={t('label')}
      aria-disabled={isLoggingOut}
    >
      {isLoggingOut ? <EllipsisIcon /> : <LogOutIcon />}
    </Button>
  );
}
