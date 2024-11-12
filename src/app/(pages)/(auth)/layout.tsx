import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { auth } from "@/lib/auth";
import { LayoutProps as AuthLayoutProps } from "@/types/pages";

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const session = await auth();

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
