import { FaPen } from "react-icons/fa";
interface PropsLinesUser {
  nome: string;
  cpf: string;
  email: string;
  tipo: string;
}

const LineUsers = ({ nome, cpf, email, tipo }: PropsLinesUser) => {
  return (
    <div className="flex justify-between">
      <div className="max-w-[40%] w-full  text-center p-2">{nome}</div>
      <div className="max-w-[10%] w-full  text-center p-2 ">{cpf}</div>
      <div className="max-w-[30%] w-full  text-center p-2">{email}</div>
      <div className="max-w-[10%] w-full  text-center p-2">{tipo}</div>
      <div className="max-w-[10%] w-full  text-center p-2 ">
        <FaPen className="w-full mx-auto cursor-pointer" />
      </div>
    </div>
  );
};

export default LineUsers;
