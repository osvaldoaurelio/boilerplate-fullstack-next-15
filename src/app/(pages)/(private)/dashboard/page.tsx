import { useTranslations } from "next-intl";

export default function DashboardPage() {
  const t = useTranslations('Pages.Dashboard');

  return (
    <div className="flex-col-center">
      <h1>{t('title')}</h1>
      <p>{t('subtitle')}</p>
    </div>
  );
}
