import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui";
import { auth } from "@/lib/auth";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { LoginForm } from "./login-form";


export default async function LoginPage() {
  const t = await getTranslations('Pages.Login');
  const session = await auth();

  if (session?.user) return redirect("/");

  return (
    <main className="main">
      <Card className="flex-col-center">
        <CardHeader>
          <Image src='/assets/images/logo.svg' alt={t('altLogo')} width={64} height={64} />
        </CardHeader>
        <CardContent className="w-full py-0">
          <LoginForm />
        </CardContent>
        <CardFooter className="flex-col-center gap-y-10">
          <Link href="/" className="underline font-bold">{t('forgotPass')}</Link>
          <div className="flex-row-center">
            <p className="text-gray-500 font-light">{t('dontHaveAccount')}</p>
            <Link href="/register" className="underline font-bold">{t('signUp')}</Link>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
