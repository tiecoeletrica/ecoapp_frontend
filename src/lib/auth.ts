import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { db } from "./db";

import axios from "axios";
interface MySessionType {
  user: {
    username: {
      colaborador: {
        nome: string;
      };
    };
  };
}
interface Token {
  username: {
    colaborador: {
      id: number;
      nome: string;
      cpf: number;
      email: string;
      equipe_id: string;
      tipo: string;
      status: string;
    };
  };
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const response = await axios.post(
          "http://192.168.0.66:3000/autenticacao",
          {
            email: credentials?.email,
            senha: credentials?.password,
          },
        );
        const user = await response.data;
        return user;
      },
    }),
  ],
  pages: {
    signIn: "auth/sign-in",
  },

  callbacks: {
    async session({
      session,
      token,
    }: {
      session: MySessionType;
      token: Token;
    }) {
      if (token) {
        return token.username.colaborador;
      }

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          username: user,
        };
      }
      return token;
    },
  },
};

// return {
//   ...session,
//   user: {
//     ...session.user,
//     username: token.username.colaborador,
//   },
// };
// const user = await response.data;

// if (!credentials?.email || !credentials?.password) {
//   return null;
// }
// if (!user) {
//   return null;
// }

// console.log(user);
// console.log(credentials.password);
// const teste = bycrypt.hash(credentials.password, 8);
// const passwordMatch = await compare(teste, user.token);
// if (!passwordMatch) {
//   return null;
// }
