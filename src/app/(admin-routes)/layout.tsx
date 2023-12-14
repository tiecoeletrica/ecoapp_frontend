import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

import Sidebar from "@/components/_ui/Sidebar/Sidebar";

import { authOptions } from "../api/auth/[...nextauth]/route";

interface PrivateLayoutProps {
  children: ReactNode;
}

interface Token {
  user: {
    id: number;
    nome: string;
    cpf: number;
    email: string;
    equipe_id: string;
    tipo: string;
    status: string;
  };
}
export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const session: Token | null = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }

  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar typeAcess={session.user.tipo} />
      <div className="flex-1">{children}</div>
    </div>
  );
}
