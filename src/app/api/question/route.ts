import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import { authOptions } from "../auth/[...nextauth]/route";

import { propsSessionPage } from "@/types/next-auth";
import { QuestionTypePost } from "@/types/rotes";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log(body);
    const user: QuestionTypePost = {
      pergunta_resposta: body.pergunta_resposta,
      tipo: body.tipo,
      categoria: body.categoria,
    };

    const session: propsSessionPage | null =
      await getServerSession(authOptions);
    const response = await fetch(
      "https://touching-grizzly-logical.ngrok-free.app/perguntas",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${session?.tokenUser}`,
        },
        body: JSON.stringify(user),
      },
    );
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
    return NextResponse.json(
      {
        user: null,
        message:
          "Erro ao criar pergunta. Por favor, tente novamente mais tarde.",
      },
      { status: 500 },
    );
  }
}
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
        body: JSON.stringify(body),
      },
    );

    if (response.ok) {
      return NextResponse.json({ message: "Pergunta atualizada com sucesso!" });
    } else {
      return "Falha ao atualizar pergunta. Por favor, tente novamente mais tarde.";
    }
  } catch (error) {
    console.error("Erro durante a atualização:", error);
    return NextResponse.json(
      {
        message:
          "Erro durante a atualização. Por favor, tente novamente mais tarde.",
      },
      { status: 500 },
    );
  }
}
