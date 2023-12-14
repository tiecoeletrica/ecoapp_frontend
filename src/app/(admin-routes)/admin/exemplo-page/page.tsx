import Form from "./components/Form";

import api from "@/services/api";
import { TurnType } from "@/types/Turno";
const getTurnos = async () =>
  api.get("/turnos").then((response) => {
    return response.data;
  });

const ExemploPage = async () => {
  const response: TurnType[] = await getTurnos();
  return (
    <div>
      <Form data={response} />
    </div>
  );
};

export default ExemploPage;
