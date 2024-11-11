"use client"

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { LocaleToggle } from "@/components/locale";
import { ThemeToggle } from "@/components/themes";

export default function NotFoundPage() {
  const t = useTranslations('Pages.NotFound');
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center space-y-4">
      <h1 className="text-6xl font-bold">{t('title')}</h1>
      <p className="text-lg">{t('subtitle')}</p>
      <Button onClick={() => router.replace("/")}>
        {t('backToHomeBtn')}
      </Button>
      <Image src="/assets/images/confused-travolta.gif" alt="404" width={500} height={500} />
    </div>
  );
}
