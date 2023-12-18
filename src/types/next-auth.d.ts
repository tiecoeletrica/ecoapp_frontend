export interface propsSession {
  user: {
    username: {
      colaborador: {
        nome: string;
        id: number;
        username: string;
        email: string;
        role: string;
        cpf: number;
        status: string;
      };
    };
  };
}
export interface prospToken {
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
    token: string;
  };
}

interface propsSessionPage {
  user: {
    id: number;
    username: string;
    email: string;
    role: string;
    cpf: number;
    status: number;
  };
  tokenUser: string;
}
