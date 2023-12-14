"use client";
import { signOut } from "next-auth/react";
import { FaPowerOff } from "react-icons/fa";

const OutForm = () => {
  return (
    <FaPowerOff
      className="cursor-pointer hover:text-red transition-all  text-2xl mb-4"
      onClick={() => signOut({ callbackUrl: "/sign-in" })}
    >
      Sair
    </FaPowerOff>
  );
};

export default OutForm;
