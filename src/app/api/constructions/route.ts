import { NextResponse } from "next/server";

import { constructionType } from "@/types/rotes";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const user: constructionType = {
      projeto: body.projeto,
      descricao: body.descricao,
      cidade: body.cidade,
      utd: body.utd,
      carteira: body.carteira,
      status: "true",
    };
    const response = await fetch(
      "https://touching-grizzly-logical.ngrok-free.app/obras",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${body.token}`,
        },
        body: JSON.stringify([user]),
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
