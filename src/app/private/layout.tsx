import { getServerSession } from "next-auth";
// import Image from "next/image";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

import Sidebar from "@/components/Sidebar";

// import Logo from "../../../public/logo.svg";
import { authOptions } from "../api/auth/[...nextauth]/route";

import { propsSessionPage } from "@/types/next-auth";
export default async function PrivateLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session: propsSessionPage | null = await getServerSession(authOptions);
  if (!session) {
    redirect("/public/sign-in");
  }

  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar typeAcess={session?.user?.role} />
      <div className="flex-1">
        <header>
          {/* <Image
            src={Logo}
            style={{ display: "block", margin: "auto" }}
            width={160}
            height={160}
            alt="Logotipo da empresa EcoElétrica, contendo uma folha estilizada que se assemelha a um raio, com as cores azul e verde."
          /> */}
        </header>
        {children}
      </div>
    </div>
  );
}
