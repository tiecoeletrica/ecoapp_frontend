export interface TurnType {
  id: number;
  equipe_id: number;
  equipe: string;
  nome: string;
  data: string;
  placa: string;
}

export interface SearchUsersType {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  tipo: string;
  toekn: string;
}

// faça a tipagem disso que esta acima
export interface VehiclesTeamType {
  id: number;
  equipe: string;
  tipo: string;
  lider_id: number;
  coordenador_id?: string;
  supervisor_id?: string;
  contrato: strings;
}
