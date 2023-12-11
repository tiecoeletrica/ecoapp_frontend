import { useRouter } from "next/navigation";
import { FaPen } from "react-icons/fa";
interface PropsLinesUser {
  nome: string;
  cpf: string;
  email: string;
  tipo: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
const LineUsers = ({ nome, cpf, email, tipo }: PropsLinesUser) => {
  const { push } = useRouter();
  function handle() {
    push(`/admin/users/usuarios/${nome}`);
  }
  return (
    <div className="flex border-r border-l border-b">
      <div className="max-w-[30%] w-full text-center py-2 border-r">{nome}</div>
      <div className="max-w-[20%] w-full text-center py-2 border-r ">{cpf}</div>
      <div className="max-w-[30%] w-full text-center py-2 border-r">
        {email}
      </div>
      <div className="max-w-[10%] w-full  text-center py-2 border-r">
        {tipo}
      </div>
      <div className="max-w-[10%] w-full  text-center py-2 border-r ">
        <FaPen className="w-full cursor-pointer" onClick={() => handle()} />
      </div>
    </div>
  );
};

export default LineUsers;
