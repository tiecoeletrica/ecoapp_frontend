import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import { authOptions } from "../../auth/[...nextauth]/route";

import { propsSessionPage } from "@/types/next-auth";

export async function PUT(req: Request) {
  const session: propsSessionPage | null = await getServerSession(authOptions);
  try {
    const body = await req.json();
    const response = await fetch(
      `https://touching-grizzly-logical.ngrok-free.app/perguntas/${body.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${session?.tokenUser}`,
        },
      },
    );
    if (response.status === 200) {
      return NextResponse.json({ message: "Pergunta atualizada com sucesso!" });
    }
  } catch (error) {
    console.error("Erro durante a atualização:", error);
  }
}
