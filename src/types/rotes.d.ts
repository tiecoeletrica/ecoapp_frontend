import { QuestionType } from "@/types/rotes";
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
  token: string;
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
export interface QuestionType {
  id: string;
  pergunta_resposta: string;
  tipo: string;
  categoria: string;
  data_inicial: string;
  data_final: string | null;
}
export interface QuestionTypePost {
  id?: number;
  pergunta_resposta: string;
  tipo: string;
  categoria: string;
}

export interface vehicleType {
  id: number;
  placa: string;
  tipo: string;
  equipe_id: number;
}
export interface serviceType {
  id: number;
  codigo: string;
  descricao: string;
  unidade: string;
}

export interface usersType {
  id: number;
  nome: string;
  cpf: number;
  email: string;
  equipe_id: string;
  tipo: string;
  status: string;
}
