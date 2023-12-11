import NextAuth from "next-auth";

declare module NextAuth {
  interface User {
    username: string;
  }

  interface Session {
    user: User & {
      id: UserId;
      username: string;
      colaborador: string;
    };
    token: {
      username: string;
      colaborador: string;
      token: string;
    };
  }
}
