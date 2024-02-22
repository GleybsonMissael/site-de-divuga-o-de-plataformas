function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adiciona a imagem light
    img.setAttribute("src", "assets/assets/avatar-light.png")
  } else {
    //se não tiver light mode, mantem a imagem original
    img.setAttribute("src", "assets/assets/avatar.png") }
}
