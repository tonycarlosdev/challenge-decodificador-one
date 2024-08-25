const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

function validateInput(input) {
  const regex = /^[a-z0-9 .,!?'-]*$/;
  return regex.test(input);
}

function btnCriptografar() {
  if (textArea.value.trim() === "") {
    showError("Por favor, digite um texto para criptografar.");
    return;
  }
  if (!validateInput(textArea.value)) {
    showError("Entrada inválida. Use apenas letras minúsculas, números e pontuação básica.");
    return;
  }
  const textoEncriptado = criptografar(textArea.value);
  textArea.value = "";
  clearError();
  mostrarTextoGradualmente(textoEncriptado);
}

function criptografar(stringEncriptada) {
    let arrayCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < arrayCodigo.length; i++) {
      stringEncriptada = stringEncriptada.split(arrayCodigo[i][0]).join(arrayCodigo[i][1]);
    }

    return stringEncriptada;
}

function btnDescriptografar() {
  if (textArea.value.trim() === "") {
    showError("Por favor, após criptografar o texto clique no botão Copiar para depois descriptografar."); // clique no botão copiar o texto criptografado para 
    return;
  }
  if (!validateInput(textArea.value)) {
    showError("Entrada inválida. Use apenas letras minúsculas, números e pontuação básica.");
    return;
  }
  const textoDescriptado = descriptografar(textArea.value);
  textArea.value = "";
  clearError();
  mostrarTextoGradualmente(textoDescriptado);
}

function descriptografar(stringDescriptada) {
  let arrayCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringDescriptada = stringDescriptada.toLowerCase();

  for(let i =  arrayCodigo.length - 1; i >= 0; i--) {
    stringDescriptada = stringDescriptada.split(arrayCodigo[i][1]).join(arrayCodigo[i][0]);
  }
  return stringDescriptada;
}

function copiarTexto() {
  textArea.value = mensagem.value;
  mensagem.select();
  mensagem.setSelectionRange(0,99999);
  document.execCommand("copy");
  mensagem.value = "";
  clearError();  
}

function showError(message) {
  textArea.value = message;
  textArea.classList.add("error-message");
}

function clearError() {
  textArea.classList.remove("error-message");
}

textArea.addEventListener("focus", function() {
  if (textArea.classList.contains("error-message")) {
    textArea.value = "";
    clearError();
  }
});

function mostrarTextoGradualmente(texto) {
  mensagem.value = ""; // Limpa o campo mensagem
  let i = 0;
  const intervalo = setInterval(() => {
    mensagem.value += texto[i];
    i++;
    if (i >= texto.length) {
      clearInterval(intervalo); // Para o intervalo quando todo o texto for exibido
    }
  }, 50); // Ajuste o tempo (em milissegundos) para controlar a velocidade do efeito
}