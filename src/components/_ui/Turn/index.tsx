"use client";
import { Input } from "../Input";

const Turn = () => {
  return (
    <div className="w-full flex justify-around">
      <Input type="text" placeholder="Digite a equipe" className="block " />
      <div className="flex items-center gap-2  min-w-[30%]">
        <Input type="date" />
        <Input type="date" />
      </div>
    </div>
  );
};

export default Turn;
