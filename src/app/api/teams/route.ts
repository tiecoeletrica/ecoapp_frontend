import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import { authOptions } from "../auth/[...nextauth]/route";

import { propsSessionPage } from "@/types/next-auth";
interface typeFull {
  equipe: string;
  tipo: string;
  lider_id: string;
  supervisor_id: string;
  coordenador_id: string;
  contrato: string;
}
export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log(body);
    const user: typeFull = {
      equipe: body.equipe,
      tipo: body.tipo,
      lider_id: body.lider_id,
      supervisor_id: body.supervisor_id,
      coordenador_id: body.coordenador_id,
      contrato: body.contrato,
    };
    console.log(body);
    const session: propsSessionPage | null =
      await getServerSession(authOptions);
    const response = await fetch(
      "https://touching-grizzly-logical.ngrok-free.app/equipes",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${session?.tokenUser}`,
        },
        body: JSON.stringify(user),
      },
    );
    console.log(response);
    if (response.status === 201) {
      return NextResponse.json(
        {
          user: user,
          message: "Pergunta criada com sucesso!",
        },
        { status: 200 },
      );
    } else {
      return "Pergunta não foi criada. Por favor, tente novamente mais tarde.";
    }
  } catch (error) {
    console.log(error);
    // return NextResponse.json(
    //   {
    //     user: null,
    //     message:
    //       "Erro ao criar pergunta. Por favor, tente novamente mais tarde.",
    //   },
    //   { status: 500 },
    // );
  }
}
