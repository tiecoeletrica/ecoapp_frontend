import { getServerSession } from "next-auth";

import Form from "./components/Form";

import { authOptions } from "../../../api/auth/[...nextauth]/route";

import api from "@/services/api";
import { propsSessionPage } from "@/types/next-auth";
import { TurnType } from "@/types/rotes";
const getTurnos = async () =>
  api.get("/turnos").then((response) => {
    return response.data;
  });

const turnsPage = async () => {
  const session: propsSessionPage | null = await getServerSession(authOptions);
  const response: TurnType[] = await getTurnos();
  if (session?.user?.role !== "ADM") {
    return <div>Você não tem permissão para acessar esta página</div>;
  }

  return (
    <div className="h-screen">
      <Form data={response} />
    </div>
  );
};

export default turnsPage;
