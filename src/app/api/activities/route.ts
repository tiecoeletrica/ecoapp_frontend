import { NextResponse } from "next/server";

import { serviceType } from "@/types/rotes";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const user: serviceType = {
      codigo: body.codigo,
      descricao: body.descricao,
      unidade: body.tipo,
    };
    const response = await fetch(
      "https://touching-grizzly-logical.ngrok-free.app/servicos",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${body.token}`,
        },
        body: JSON.stringify(user),
      },
    );
    if (response.status === 201 || response.status === 200) {
      console.log(response.status);
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
// export async function PUT(req: Request) {
//   const session: propsSessionPage | null = await getServerSession(authOptions);
//   try {
//     const body = await req.json();
//     const response = await fetch(
//       `https://touching-grizzly-logical.ngrok-free.app/perguntas/${body.id}`,
//       {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Token ${session?.tokenUser}`,
//         },
//         body: JSON.stringify(body),
//       },
//     );

//     if (response.ok) {
//       return NextResponse.json({ message: "Pergunta atualizada com sucesso!" });
//     } else {
//       return "Falha ao atualizar pergunta. Por favor, tente novamente mais tarde.";
//     }
//   } catch (error) {
//     console.error("Erro durante a atualização:", error);
//     return NextResponse.json(
//       {
//         message:
//           "Erro durante a atualização. Por favor, tente novamente mais tarde.",
//       },
//       { status: 500 },
//     );
//   }
// }
