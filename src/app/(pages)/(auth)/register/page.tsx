import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui";
import { auth } from "@/lib/auth";
import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";
import { RegisterForm } from "./register-form";
import Image from "next/image";
import Link from "next/link";


export default async function RegisterPage() {
  const t = await getTranslations('Pages.Register');
  const session = await auth();

  if (session?.user) return redirect("/");

  return (
    <main className="main">
      <Card className="flex-col-center">
        <CardHeader>
          <Image src='/assets/images/logo.svg' alt={t('altLogo')} width={64} height={64} />
        </CardHeader>
        <CardContent className="w-full py-0">
          <RegisterForm />
        </CardContent>
        <CardFooter className="flex-col-center mt-10">
          <div className="flex-row-center ">
            <p className="text-gray-500 font-light">{t('alreadyHaveAccount')}</p>
            <Link href="/login" className="underline font-bold">{t('signIn')}</Link>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
