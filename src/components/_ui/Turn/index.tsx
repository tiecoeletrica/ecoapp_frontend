import { FaPen } from "react-icons/fa";

interface TurnProps {
  cod: string;
  processo: string;
  contrato: string;
  coordenador: string;
  supervisor: string;
  responsavel: string;
  placa: string;
  data_inicial: string;
  data_final: string;
  situacao: string;
}
const Turn = ({
  cod,
  processo,
  contrato,
  coordenador,
  supervisor,
  responsavel,
  placa,
  data_inicial,
  data_final,
  situacao,
}: TurnProps) => {
  return (
    <div>
      <div className="flex items-center justify-between border-b border-l border-r p-4 w-full">
        <div className="min-w-full[10] text-center">
          <a href={cod}>{cod}</a>
        </div>
        <div className="min-w-full[10] text-center">{processo}</div>
        <div className="min-w-full[10] text-center">{contrato}</div>
        <div className="min-w-full[10] text-center">{coordenador}</div>
        <div className="min-w-full[10] text-center">{supervisor}</div>
        <div className="min-w-full[10] text-center">{responsavel}</div>
        <div className="min-w-full[10] text-center">{placa}</div>
        <div className="min-w-full[10] text-center">{data_inicial}</div>
        <div className="min-w-full[10] text-center">{data_final}</div>
        <div className="min-w-full[10] text-center">{situacao}</div>
        <div className="min-w-full[10] text-center">
          <FaPen />
        </div>
      </div>
    </div>
  );
};
export default Turn;
