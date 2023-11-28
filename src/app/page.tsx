// import SignInForm from "@/components/form/SignInForm";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { FaPowerOff } from "react-icons/fa";

import Header from "../components/_ui/Header";

import { authOptions } from "../lib/auth";

const Home = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    return (
      <div className="grid grid-cols-12">
        <aside className="grid col-span-2 grid-rows-6 border-r border-r-gray-300  p-4">
          <div className=" flex justify-end text-4xl cursor-pointer">T</div>
          <div className="w-full mx-auto items-center justify-center row-span-2">
            <div className="w-20 h-20 bg-red rounded-full mx-auto mb-4"></div>
            <Link
              style={{ textDecoration: "none" }}
              className="block w-full text-center text-blue-900 hover:text-blue-800"
              href="/auth/register"
            >
              Gerenciar
            </Link>
          </div>
          <nav className="flex flex-col mx-auto row-span-4">
            <ul>
              <li className="mb-4 ">
                <Link
                  className="text-blue-900 hover:text-blue-800"
                  style={{ textDecoration: "none" }}
                  href="dashboard"
                >
                  TEMA 1
                </Link>
              </li>
              <li className="mb-4 ">
                <Link
                  className="text-blue-900 hover:text-blue-800"
                  style={{ textDecoration: "none" }}
                  href="dashboard"
                >
                  TEMA 2
                </Link>
              </li>
              <li className="mb-4 ">
                <Link
                  className="text-blue-900 hover:text-blue-800"
                  style={{ textDecoration: "none" }}
                  href="dashboard"
                >
                  TEMA 3
                </Link>
              </li>
            </ul>
            <FaPowerOff />
          </nav>
        </aside>
        <main className="col-span-10 grid grid-rows-6 relative">
          <Header />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 row-span-5">
            <div className="bg-green-900 w-full  rounded text-white text-center">
              teste
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      Please login to see this admin Home
    </h2>
  );
};
export default Home;
