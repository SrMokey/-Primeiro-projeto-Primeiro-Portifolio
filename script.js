function toggleMode() {
  const html = document.documentElement;

  html.classList.toggle("light");

  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    // Modo Claro:
    img.src = "./assets/avatar-light.png";
    img.alt = "Foto do aprendiz em programação Caio Souza";
  } else {
    // Modo Escuro:
    img.src = "./assets/avatar-dark.png";
    img.alt = "Foto do aprendiz em programação Caio Souza";
  }
}
