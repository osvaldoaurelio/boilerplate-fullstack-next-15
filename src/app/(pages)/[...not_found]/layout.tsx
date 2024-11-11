import { LocaleToggle } from "@/components/locale";
import { ThemeToggle } from "@/components/themes";
import { auth } from "@/lib/auth";
import { LayoutProps as AuthLayoutProps } from "@/types/pages";
import { LogOutBtn } from "@/components/auth";

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const session = await auth();

  return (
    <div className="flex flex-col gap-y-8 items-center justify-center min-h-screen">
      <div className="right-[16px] top-[16px] flex gap-x-2 fixed z-100">
        <LocaleToggle />
        <ThemeToggle />
        {session?.user?.name && (
          <LogOutBtn />
        )}
      </div>
      {children}
    </div>
  );
}