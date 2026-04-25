function toggleMode() {
  const html =
    document.documentElement /* sempre que eu colocar um ponto (.), estou acessando propriedades e funcionalidades!!! */

  html.classList.toggle("light")
  /* toggle alterna entre dois estados (ligado/desligado, mostrar/esconder, true/false). */

  const img = document.querySelector("#profile img") //querySelector() é um método que busca um elemento na página.

  // pegar a tag img
  // substituir a imagem
  // se tiver light mode, adicionar a imagem light
  // se tiver sem light mode, manter a imagem normal

  // img.setAttribute => definir um atributo do elemento img

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-aline-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.aline.png")
  }
}
