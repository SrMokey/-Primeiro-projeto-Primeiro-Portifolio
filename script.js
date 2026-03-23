function toggleMode() {
  const html = document.documentElement;
  // if(html.classList.contains("light")) html.classList.remove("light");
  // else html.classList.add("light" );
  // modo simplificado:
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute(
      "alt",
      "Foto do aprendiz em programação Caio Souza, com roupa clara e sem oculos",
    );
  } else {
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute(
      "alt",
      "Foto do aprendiz em programação Caio Souza, cabelo ondulado, e com oculos",
    );
  }
}
