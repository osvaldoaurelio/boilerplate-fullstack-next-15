"use client"

import { Button } from "@/components/ui";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const { replace } = useRouter();
  const t = useTranslations('Pages.NotFound');

  return (
    <main className="main gap-y-10">
      <h1 className="text-5xl font-bold">{t('title')}</h1>
      <p className="text-lg">{t('subtitle')}</p>
      <Button onClick={() => replace("/")}>{t('backToHomeBtn')}</Button>
      <Image src="/assets/images/confused-travolta.gif" alt="404" width={500} height={500} />
    </main>
  );
}
