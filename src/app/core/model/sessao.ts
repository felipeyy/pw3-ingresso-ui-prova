import { Filme } from "./filme";

export interface Sessao {
  id: number;
  data?: Date;
  horario?: string;
  preco?: number;
  sala?: string;
  filme?: Filme
  
}
