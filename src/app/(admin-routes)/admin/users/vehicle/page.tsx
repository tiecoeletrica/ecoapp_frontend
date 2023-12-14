import Form from "./components/Form";

import api from "@/services/api";
import { VehicleType } from "@/types/type-req";
const getVehicles = async () =>
  api.get("/veiculos").then((response) => {
    return response.data;
  });

const vehicle = async () => {
  const response: VehicleType[] = await getVehicles();
  return (
    <div>
      <Form data={response} />
    </div>
  );
};

export default vehicle;
