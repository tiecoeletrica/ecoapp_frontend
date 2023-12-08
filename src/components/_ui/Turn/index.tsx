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
    <div className="flex items-center justify-between border-b border-l border-r w-full">
      <div className="min-w-[10%] max-w-[10%] w-full text-center">
        <a href={cod}>{cod}</a>
      </div>
      <div className="min-w-[10%] max-w-[10%] w-full text-center">
        {processo}
      </div>
      <div className="min-w-[10%] max-w-[10%] w-full text-center">
        {contrato}
      </div>
      <div className="min-w-[10%] max-w-[10%] w-full text-center">
        {coordenador}
      </div>
      <div className="min-w-[10%] max-w-[10%] w-full text-center">
        {supervisor}
      </div>
      <div className="min-w-[10%] max-w-[10%] w-full text-center">
        {responsavel}
      </div>
      <div className="min-w-[10%] max-w-[10%] w-full text-center">{placa}</div>
      <div className="min-w-[10%] max-w-[10%] w-full text-center">
        {data_inicial}
      </div>
      <div className="min-w-[10%] max-w-[10%] w-full text-center">
        {data_final}
      </div>
      <div className="min-w-[10%] max-w-[10%] w-full text-center">
        {situacao}
      </div>
      <div className="min-w-[10%] max-w-[10%] w-full text-center">
        <FaPen />
      </div>
    </div>
  );
};
export default Turn;
