import { Button } from "@/components/ui";
import { auth } from "@/lib/auth";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function HomePage() {
  const t = await getTranslations('Pages.Home');
  const session = await auth();

  return (
    <main className="main">
      <h1>{t('title')}</h1>
      <p>{t('subtitle')}</p>

      {session?.user?.name && (
        <Button asChild>
          <Link href='/dashboard'>
            {t('Buttons.dashboard')}
          </Link>
        </Button>
      )}
    </main>
  );
}
