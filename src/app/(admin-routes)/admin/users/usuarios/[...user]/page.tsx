"use client";
import { useRouter } from "next/navigation";
const UserId = () => {
  const { back } = useRouter();
  return (
    <div>
      <button onClick={() => back()}>back</button>
    </div>
  );
};

export default UserId;
