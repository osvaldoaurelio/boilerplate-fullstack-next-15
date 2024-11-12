import { LogOutBtn } from "@/components/auth";
import { LocaleToggle } from "@/components/locale";
import { ThemeToggle } from "@/components/themes";
import { Button } from "@/components/ui";
import { auth } from "@/lib/auth";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { UserAvatar } from "./user-avatar";

export async function Header() {
  const session = await auth();
  const t = await getTranslations('Components.Layout.Header');

  return (
    <header className="fixed top-0 p-6 flex justify-between w-full backdrop-blur-lg shadow-lg z-100">
      <div className="flex-row-center">
        <Image src="/assets/images/logo.svg" alt="logo" width={48} height={48} />
      </div>

      <div className="flex-row-center">
        {session?.user ? (
          <>
            <LocaleToggle />
            <ThemeToggle />
            <UserAvatar image={session?.user?.image} name={session?.user?.name} />
            <LogOutBtn />
          </>
        ) : (
          <>
            <Button asChild>
              <Link href='/login'>{t('Buttons.login')}</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href='/register'>{t('Buttons.register')}</Link>
            </Button>
            <LocaleToggle />
            <ThemeToggle />
          </>
        )}
      </div>
    </header>
  );
}
