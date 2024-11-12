import { getTranslations } from "next-intl/server";

export async function Footer() {
  const t = await getTranslations('Components.Layout.Footer');

  return (
    <footer className="flex-col-center">
      <p>{t('title')}</p>
    </footer>
  );
}
