let btnEncriptar = document.querySelector("#btn-encriptar");
let btnDesencriptar = document.querySelector("#btn-desencriptar");
let textarea = document.querySelector(".textarea-texto");
let contenedorResultado = document.querySelector(
  ".mensaje-decifrado-container"
);

const encriptar = () => {
  let frase = textarea.value;
  let fraseEncriptada = "";
  for (let letra of frase) {
    if (letra == "a") {
      fraseEncriptada += "ai";
    } else if (letra == "e") {
      fraseEncriptada += "enter";
    } else if (letra == "i") {
      fraseEncriptada += "imes";
    } else if (letra == "o") {
      fraseEncriptada += "ober";
    } else if (letra == "u") {
      fraseEncriptada += "ufat";
    } else {
      fraseEncriptada += letra;
    }
  }
  if (fraseEncriptada == "") {
    contenedorResultado.innerHTML = `
    <img src="./assets/img/Muñeco.png" />
    <h2>Ningún mensaje fue encontrado</h2>
    <p>Ingresa el texto que desees encriptar o desencriptar.</p>`;
  } else {
    contenedorResultado.innerHTML = `
    <div class="container-resultado">
      <p class="resultado">${fraseEncriptada}</p>
    </div>
    <button class="btn btn-type-2 btn-copiar">Copiar</button>
    `;
    let btnCopy = document.querySelector(".btn-copiar");
    let resultado = document.querySelector(".resultado");
    btnCopy.addEventListener("click", () => copiar(resultado));
  }
};

const desencriptar = () => {
  let fraseEncriptada = textarea.value;
  let fraseDesencriptada = "";
  fraseDesencriptada = fraseEncriptada.replaceAll("ai", "a");
  fraseDesencriptada = fraseDesencriptada.replaceAll("enter", "e");
  fraseDesencriptada = fraseDesencriptada.replaceAll("imes", "i");
  fraseDesencriptada = fraseDesencriptada.replaceAll("ober", "o");
  fraseDesencriptada = fraseDesencriptada.replaceAll("ufat", "u");

  if (fraseDesencriptada == "") {
    contenedorResultado.innerHTML = `
    <img src="./assets/img/Muñeco.png" />
    <h2>Ningún mensaje fue encontrado</h2>
    <p>Ingresa el texto que desees encriptar o desencriptar.</p>`;
  } else {
    contenedorResultado.innerHTML = `
    <div class="container-resultado">
      <p class="resultado">${fraseDesencriptada}</p>
    </div>
    <button class="btn btn-type-2 btn-copiar">Copiar</button>
    `;
    let btnCopy = document.querySelector(".btn-copiar");
    let resultado = document.querySelector(".resultado");
    btnCopy.addEventListener("click", () => copiar(resultado));
  }
};
btnEncriptar.addEventListener("click", encriptar);

btnDesencriptar.addEventListener("click", desencriptar);

function copiar(resultado) {
  let texto = resultado.textContent;
  navigator.clipboard
    .writeText(texto)
    .then(() => {
      console.log("texto copiado...");
    })
    .catch((err) => {
      console.log("algo ha ocurrido mal", err);
    });
}
