import Form from "./components/Form";

import api from "@/services/api";
const getServices = async () =>
  api.get("/servicos").then((response) => {
    return response.data;
  });
const servicePage = async () => {
  const response = await getServices();

  return <Form data={response} />;
};

export default servicePage;
