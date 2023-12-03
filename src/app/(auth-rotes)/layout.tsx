import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

import { authOptions } from "../api/auth/[...nextauth]/route";

interface PrivateLayoutProps {
  children: ReactNode;
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/admin");
  }

  return <div className="flex-1">{children}</div>;
}
