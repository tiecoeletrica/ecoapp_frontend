import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function PrivateLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/private/dashboard");
  }

  return <div className="flex-1">{children}</div>;
}
