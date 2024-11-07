import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <div className="flex flex-col gap-y-8 items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <h1>{t('title')}</h1>
      <p>{t('subtitle')}</p>
    </div>
  );
}
