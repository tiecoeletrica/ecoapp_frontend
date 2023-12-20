import Select from "@/components/Select";

import { QuestionType } from "@/types/rotes";
interface FormProps {
  data: QuestionType[];
}
const Form = ({ data }: { data: FormProps }) => {
  console.log(data);
  return (
    <div>
      <form>
        <Select title="categoria">
          <option value="RISCO ELÉTRICO">RISCO ELÉTRICO</option>
          <option value="RISCO RELACIONADOS ÀS FERRAMENTAS DE TRABALHO">
            RISCO RELACIONADOS ÀS FERRAMENTAS DE TRABALHO
          </option>
        </Select>
      </form>
    </div>
  );
};

export default Form;
