"use client";
import { useSession } from "next-auth/react";

export default function ProtectedButton({ children, ...props }) {
  const { data: session } = useSession();
  if (session?.user?.role !== "admin") return null;
  return <button {...props}>{children}</button>;
}
