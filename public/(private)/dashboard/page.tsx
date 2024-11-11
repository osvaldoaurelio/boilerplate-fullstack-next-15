import { useTranslations } from "next-intl";

export default function DashboardPage() {
  const t = useTranslations('Pages.Dashboard');

  return (
    <div className="flex flex-col gap-y-8 items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <h1>{t('title')}</h1>
      <p>{t('subtitle')}</p>
    </div>
  );
}
