import { getServerSession } from "next-auth";

import { authOptions } from "../../../api/auth/[...nextauth]/route";

import { propsSessionPage } from "@/types/next-auth";

const calendarPage = async () => {
  const session: propsSessionPage | null = await getServerSession(authOptions);

  if (session?.user?.role !== "CAMPO") {
    return <div>Você não tem permissão para acessar esta página</div>;
  }

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      TURNO
    </div>
  );
};

export default calendarPage;
