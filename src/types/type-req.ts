export interface TurnType {
  id: number;
  equipe_id: number;
  equipe: string;
  nome: string;
  data: string;
  placa: string;
}

export interface Session {
  user: {
    id: number;
    equipe_id: number;
    equipe: string;
    nome: string;
    data: string;
    placa: string;
  };
  tokenUser: string;
}

export interface SearchUsersType {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  tipo: string;
  toekn: string;
}
export interface VehicleType {
  id: number;
  placa: string;
  tipo: string;
  equipe_id: number;
}
