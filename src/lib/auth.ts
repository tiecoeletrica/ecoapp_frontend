import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Forma para referenciar onde é minha tela de login
import { db } from "./db";

import axios from "axios";
import { compare } from "bcrypt";
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
          "http://localhost:3000/autenticacao",
          {
            email: credentials?.email,
            senha: credentials?.password,
          },
        );

        const resposta = await response.data.colaborador;

        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        if (!resposta) {
          return null;
        }
        const passwordMatch = await compare(
          credentials.password,
          resposta.senha,
        );
        if (!passwordMatch) {
          return null;
        }
        // console.log(resposta);
        console.log(resposta);
        return resposta;
      },
    }),
  ],
  pages: {
    signIn: "auth/sign-in",
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log(token);
      console.log(user);
      console.log(user);
      if (user) {
        console.log("oi");
        return {
          ...token,
          username: user.username,
        };
      }
      console.log(token);
      return token;
    },
    async session({ session, token }) {
      console.log(token);
      return {
        ...session,
        user: {
          ...session.user,
          username: token.username,
        },
      };
    },
  },
};
