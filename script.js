const selecionado = document.querySelector("#switch-shadow");

let lamp = document.querySelector("#lampada");

selecionado.addEventListener("change", (el) => {
  if (selecionado.checked) {
    lamp.setAttribute("src", "img/lampada acesa.png");
  }
  else{
    lamp.setAttribute("src", "img/lampada apagada.png");
  }
});
