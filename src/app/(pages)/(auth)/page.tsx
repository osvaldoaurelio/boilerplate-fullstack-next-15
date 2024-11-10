import { Button } from "@/components/ui";
import { auth } from "@/lib/auth";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function HomePage() {
  const t = await getTranslations('Pages.Home');
  const session = await auth();

  return (
    <main className="flex flex-col gap-y-8 items-center justify-center min-h-screen ">
      <h1>{t('title')}</h1>
      <p>{t('subtitle')}</p>
      {session?.user?.name ? (
        <Button asChild>
          <Link href='/dashboard'>
            {t('Buttons.dashboard')}
          </Link>
        </Button>
      ) : (
        <div className="flex gap-x-4">
          <Button asChild>
            <Link href='/login'>
              {t('Buttons.login')}
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href='/register'>
              {t('Buttons.register')}
            </Link>
          </Button>
        </div>
      )}
    </main>
  );
}
