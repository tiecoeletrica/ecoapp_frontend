import { FaPen } from "react-icons/fa";

interface TurnProps {
  id: number;
  equipe_id: number;
  equipe: string;
  nome: string;
  data: string;
  placa: string;
}
const Turn = ({ equipe_id, nome, data, placa }: TurnProps) => {
  return (
    <div className="flex items-center justify-between border-b border-l border-r w-full">
      <div className="min-w-[10%] max-w-[10%] w-full text-center">
        {equipe_id}
      </div>
      <div className="min-w-[10%] max-w-[10%] w-full text-center">{nome}</div>
      <div className="min-w-[10%] max-w-[10%] w-full text-center">{data}</div>
      <div className="min-w-[10%] max-w-[10%] w-full text-center">{placa}</div>

      <div className="min-w-[10%] max-w-[10%] w-full text-center">
        <FaPen />
      </div>
    </div>
  );
};
export default Turn;
