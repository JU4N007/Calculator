let pantalla = document.getElementById("pantallaP");
let previa = document.getElementById("pantallaS");
let entrada = "";

function Mostrar(elemento) {
  entrada += elemento;
  pantalla.innerText = entrada;
  previa.innerText = "=" + eval(entrada.replace("x", "*"));
}

function Calcular() {
  let resultado = eval(entrada.replace("x", "*"));
  pantalla.innerText = resultado;
  entrada = resultado.toString();
}

function LimpiarT() {
  entrada = "";
  pantalla.innerText = entrada;
  previa.innerText = entrada;
}

function limpiarU() {
  if (entrada == "Infinity") {
    LimpiarT();
  } else {
    entrada = entrada.slice(0, -1);
    pantalla.innerText = entrada;
    previa.innerText = "=" + entrada;
  }
}

document.addEventListener("keydown", function (event) {
  manejarEntradaTeclado(event.key);
});

function manejarEntradaTeclado(tecla) {
  if (!isNaN(tecla)) {
    Mostrar(tecla);
  } else if (tecla == "+") {
    Mostrar("+");
  } else if (tecla == "-") {
    Mostrar("-");
  } else if (tecla == "*") {
    Mostrar("*");
  } else if (tecla == "/") {
    Mostrar("/");
  } else if (tecla == ".") {
    Mostrar(".");
  } else if (tecla == "Enter") {
    Calcular();
  } else if (tecla == "Backspace") {
    limpiarU();
  } else if (tecla == "Escape") {
    LimpiarT();
  }
}
