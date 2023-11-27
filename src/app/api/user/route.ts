import { NextResponse } from "next/server";

import { db } from "../../../lib/db";

import { hash } from "bcrypt";
import * as z from "zod";

// Define a schem for input validation

const userSchema = z.object({
  username: z.string().min(1, "Username is required").max(100),
  email: z
    .string()
    .nonempty("O email é obrigatório!")
    .email("Formato de email inválido")
    .refine((email) => {
      return email.endsWith("@ecoeletrica.com.br");
    }, "O email deve conter o dominio da Ecoelétrica"),
  password: z.string().min(6, "A senha precisa conter no minimo 6 caracteres"),
});

// CODIGO PARA VERIFICAR A EXISTENCIA DE USER
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } = userSchema.parse(body);

    const existingUserByEmail = await db.user.findUnique({
      where: { email: email },
    });

    if (existingUserByEmail) {
      return NextResponse.json(
        {
          user: null,
          message: "Esse email já existe!",
        },
        { status: 409 },
      );
    }

    const existingUserByUsername = await db.user.findUnique({
      where: { username: username },
    });

    if (existingUserByUsername) {
      return NextResponse.json(
        {
          user: null,
          message: "Esse user já existe!",
        },
        { status: 409 },
      );
    }

    const hashedPassword = await hash(password, 10); // Use bcrypt para criar um hash seguro da senha

    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword, // Salve a senha hashada no banco de dados
      },
    });

    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json({ user: rest, message: "User created" });
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
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
