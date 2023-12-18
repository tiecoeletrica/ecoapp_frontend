import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { propsSession, prospToken } from "@/types/next-auth";
import axios from "axios";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "public/sign-in",
  },
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
          "http://192.168.0.11:3000/autenticacao",
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
  callbacks: {
    async session({
      session,
      token,
    }: {
      session: propsSession;
      token: prospToken;
    }) {
      if (token) {
        return {
          ...session,
          user: {
            id: token.username.colaborador.id,
            username: token.username.colaborador.nome,
            email: token.username.colaborador.email,
            role: token.username.colaborador.tipo,
            cpf: token.username.colaborador.cpf,
            status: token.username.colaborador.status,
          },
          tokenUser: token.username.token,
        };
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
