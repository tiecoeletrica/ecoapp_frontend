import { NextResponse } from "next/server";

import { hash } from "bcrypt";
interface User {
  nome: string;
  email: string;
  senha: string;
  cpf?: number;
}
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const user: User = {
      nome: body.username,
      email: body.email,
      senha: body.password,
      cpf: 12345678901,
    };
    const response = await fetch("http://192.168.0.72:3000/solicitacoes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.status == 201) {
      return NextResponse.json({ user, message: "User created" });
    } else {
      console.log("Algum erro de validação ocorreu.");
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
