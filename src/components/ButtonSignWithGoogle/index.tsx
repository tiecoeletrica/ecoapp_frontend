import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

const ButtonSignWithGoogle = () => {
  return (
    <div
      className="mt-2 flex items-center justify-center h-10 w-full gap-2 border border-gray rounded cursor-pointer
      hover:bg-gray hover:text-white transition-colors duration-300"
      onClick={() => signIn()}
    >
      <FaGoogle />
      <span>Login com o google</span>
    </div>
  );
};

export default ButtonSignWithGoogle;
