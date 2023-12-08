import { FaPen } from "react-icons/fa";
interface PropsVeiculos {
  placa: string;
  tipo: string;
  equipe: string;
}
const LineVehicles = ({ placa, tipo, equipe }: PropsVeiculos) => {
  return (
    <div className="w-full flex justify-between border-b ">
      <div className="max-w-[25%] bg- w-full text-center border-r">{placa}</div>
      <div className="max-w-[25%] w-full text-center border-r">{tipo}</div>
      <div className="max-w-[25%] w-full text-center border-r">{equipe}</div>
      <div className="max-w-[25%] text-center w-full flex justify-center">
        <FaPen className="mt-1" />
      </div>
    </div>
  );
};

export default LineVehicles;
