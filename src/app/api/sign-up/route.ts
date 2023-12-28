import { NextResponse } from "next/server";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log(body);
    const user = {
      nome: body.username,
      email: body.email,
      senha: body.password,
      cpf: "***********",
    };
    console.log(user);

    const response = await fetch(
      "https://touching-grizzly-logical.ngrok-free.app/colaboradores",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      },
    );
    console.log(response);
    if (response.status === 201) {
      return NextResponse.json(
        {
          user: user,
          message: "Usuário solicitado com sucesso!",
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
          "Erro ao solicitar usuário. Por favor, tente novamente mais tarde.",
      },
      { status: 500 },
    );
  }
}
