import { NextResponse } from "next/server";

interface User {
  nome: string;
  cpf: string;
  email: string;
  senha: string;
  tipo: string;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const user: User = {
      nome: body.nome,
      email: body.email,
      senha: body.senha,
      cpf: body.cpf,
      tipo: body.tipo,
    };

    console.log(user);
    const response = await fetch(
      "https://touching-grizzly-logical.ngrok-free.app/colaboradores",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDMwOTc2MjgsImV4cCI6MTcwMzE1NTIyOCwic3ViIjoiOCJ9._Wuyt2J9BMK-jLpbX6vuQsOkxTpfF-pczxdMp7qTBuk`,
        },
        body: JSON.stringify(user),
      },
    );
    if (response.status === 201) {
      return NextResponse.json(
        {
          user: user,
          message: "Usuário criado com sucesso!",
        },
        { status: 200 },
      );
    } else {
      return "Irineu você não sabe nem eu";
    }
  } catch (error) {
    return NextResponse.json(
      {
        user: null,
        message:
          "Erro ao criar usuário. Por favor, tente novamente mais tarde.",
      },
      { status: 500 },
    );
  }
}
