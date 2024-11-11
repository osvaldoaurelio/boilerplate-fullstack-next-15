import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { auth } from "@/lib/auth";
import { getTranslations } from "next-intl/server";
import { LoginForm } from "./login-form";
import { redirect } from "next/navigation";


export default async function LoginPage() {
  const t = await getTranslations('Pages.Login');
  const session = await auth();

  if (session?.user) return redirect("/");

  return (
    <Card className="flex flex-col gap-y-8 items-center justify-center">
      <CardHeader>
        <CardTitle>{t('title')}</CardTitle>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  );
}
