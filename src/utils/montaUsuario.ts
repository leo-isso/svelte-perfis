import type IUsuario from "../Interfaces/IUsuario";

export default function (dadosUsuario: any, dadosRepositorios: any): IUsuario {
  return {
    avatar_url: dadosUsuario.avatar_url,
    login: dadosUsuario.login,
    nome: dadosUsuario.name,
    perfil_url: dadosUsuario.html_url,
    repositorios_publicos: dadosUsuario.public_repos,
    repositorios_recentes: dadosRepositorios.map((dadosRepositorio) => ({
      nome: dadosRepositorio.name,
      url: dadosRepositorio.html_url,
    })),
    seguidores: dadosUsuario.followers,
  };
}
