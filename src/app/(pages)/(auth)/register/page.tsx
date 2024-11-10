import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { auth } from "@/lib/auth";
import { getTranslations } from "next-intl/server";
import { RegisterForm } from "./register-form";


export default async function RegisterPage() {
  const t = await getTranslations('Pages.Register');
  const session = await auth();

  return (
    <Card className="flex flex-col gap-y-8 items-center justify-center">
      <CardHeader>
        <CardTitle>{t('title')}</CardTitle>
      </CardHeader>
      <CardContent>
        <RegisterForm />
      </CardContent>
      <p>{JSON.stringify(session)}</p>
    </Card>
  );
}
