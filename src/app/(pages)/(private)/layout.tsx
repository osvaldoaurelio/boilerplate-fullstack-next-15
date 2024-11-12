import { auth } from "@/lib/auth";
import { LayoutProps as DashboardLayoutProps } from "@/types/pages";
import { redirect } from "next/navigation";

export default async function Layout({ children }: DashboardLayoutProps) {
  const session = await auth();
  if (!session?.user) return redirect("/login");

  return (
    <div className="flex-col-center min-h-screen">
      <h1>{session?.user?.name}</h1>
      {children}
    </div>
  );
}