import { auth } from "@/lib/auth";
import { LayoutProps as DashboardLayoutProps } from "@/types/pages";

export default async function Layout({ children }: DashboardLayoutProps) {
  const session = await auth();

  return (
    <div className="flex flex-col gap-y-8 items-center justify-center min-h-screen">
      <h1>{session?.user?.name}</h1>
      {children}
    </div>
  );
}