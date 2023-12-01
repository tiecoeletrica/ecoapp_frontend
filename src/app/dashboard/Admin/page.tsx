import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

import Menu from "@/components/_ui/Menu";

import Logo from "../../../../public/logo.svg";
import { authOptions } from "../../../lib/auth";

const Admin = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    return (
      <div className="h-screen bg-blue-200 grid grid-cols-6 grid-rows-6">
        <Menu />
        <main className="bg-blue-800 text-white text-center text-5xl  col-span-5 row-span-6 grid grid-cols-6 grid-rows-6">
          <header className="row-span-1 col-span-6 flex justify-center">
            <Image src={Logo} alt="Logo da empresa"></Image>
          </header>
          <section className="row-span-6 col-span-6 bg-red">teste</section>
        </main>
      </div>
    );
  }

  return redirect("/sign-in");
};

export default Admin;
