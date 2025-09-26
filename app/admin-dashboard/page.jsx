
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import DashboardPage from "@/components/pages/dashboard-page";


export default async function AdminDashboardPage() {
  const session = await getServerSession(authOptions);

  console.log("Raw Session:", session);

  if (!session || session.user?.role !== "admin") {
    redirect("/signin");
  }

  console.log("✅ Admin Session:", session.user);

  return <DashboardPage />;
}
