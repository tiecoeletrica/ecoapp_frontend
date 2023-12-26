import { Input } from "@/components/Input";

import { serviceType } from "@/types/rotes";
interface FormProps {
  data: serviceType;
}
const FormUpdate = ({ data }: FormProps) => {
  console.log(data);
  return (
    <div className=" max-w-[1000px] w-full mx-auto px-4 relative mt-10 ">
      <div className="flex flex-scol md:flex-row gap-4">
        <Input title="Código" />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <Input title="Descricão" />
      </div>
      <div className="w-full">
        <label className="font-bold">Tipo</label>
        <select className="border border-gray outline-none focus:no-underline h-10 w-full rounded">
          <option value="Escolha">Escolha</option>
          <option value="MT">MT</option>
          <option value="MM">MM</option>
          <option value="ML">ML</option>
        </select>
      </div>
    </div>
  );
};
export default FormUpdate;
