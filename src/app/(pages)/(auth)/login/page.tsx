import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { auth } from "@/lib/auth";
import { getTranslations } from "next-intl/server";
import { LoginForm } from "./login-form";


export default async function LoginPage() {
  const t = await getTranslations('Pages.Login');
  const session = await auth();

  return (
    <Card className="flex flex-col gap-y-8 items-center justify-center">
      <CardHeader>
        <CardTitle>{t('title')}</CardTitle>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
      <p>{JSON.stringify(session)}</p>
    </Card>
  );
}
