export function buscaUsuario(usuario: string) {
  return fetch(`https://api.github.com/users/${usuario}`);
}

export function buscaRepositorios(usuario: string) {
  return fetch(
    `https://api.github.com/users/${usuario}/repos?sort=created&per_page=5`
  );
}
