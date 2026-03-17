function toggleMode() {
  const html = document.documentElement;
  // if(html.classList.contains("light")) html.classList.remove("light");
  // else html.classList.add("light" );
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Avatar.png");
    img.setAttribute(
      "alt",
      "Foto do aprendiz em programação Caio Souza, com roupa clara e sem oculos",
    );
  } else {
    img.setAttribute("src", "./assets/avatar-dark.png");
    img.setAttribute(
      "alt",
      "Foto do aprendiz em programação Caio Souza, cabelo ondulado, e com oculos",
    );
  }
}
