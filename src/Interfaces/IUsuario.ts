import type IRepositorio from "./IRepositorio";

interface IUsuario {
  login: string;
  avatar_url: string;
  perfil_url: string;
  repositorios_publicos: number;
  seguidores: number;
  nome: string;
  repositorios_recentes: IRepositorio[];
}

export default IUsuario;
