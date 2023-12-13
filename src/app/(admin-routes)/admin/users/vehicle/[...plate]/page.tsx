"use client";
import { useRouter } from "next/navigation";
const UserId = () => {
  const { back } = useRouter();
  return (
    <div className="container mx-auto px-4">
      Estou em algum veículo especifico
      <button onClick={() => back()}>back</button>
    </div>
  );
};

export default UserId;
