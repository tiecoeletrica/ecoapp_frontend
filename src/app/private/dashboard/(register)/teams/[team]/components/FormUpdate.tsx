import { Input } from "@/components/Input";
interface TypesTurnId {
  id: string;
  nome: string;
  tipo: string;
  lider: string;
  supervisor: string;
  coordenador: string;
  contrato: string;
}
interface FormProps {
  data: TypesTurnId;
}
const FormUpdate = ({ data }: FormProps) => {
  return (
    <div className=" max-w-[1000px] w-full mx-auto px-4 relative mt-10 ">
      <div className="flex flex-scol md:flex-row gap-4">
        <Input title="Equipe" value={data.nome} />
        <Input title="Lider" />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <Input title="Supervisor" />
        <Input title="Coordenador" />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <Input title="Contrato" />
        <Input title="tipo" />
      </div>
    </div>
  );
};
export default FormUpdate;
