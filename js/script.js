const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

function validateInput(input) {
  const regex = /^[a-z0-9 .,!?'-]*$/;
  return regex.test(input);
}

function btnCriptografar() {
  if (textArea.value.trim() === "") {
    alert("Por favor, digite um texto para criptografar.");
    return;
  }
  if (!validateInput(textArea.value)) {
    alert("Entrada inválida. Use apenas letras minúsculas, números e pontuação básica.");
    return;
  }
  const textoEncriptado = criptografar(textArea.value);
  mensagem.value = textoEncriptado;
  textArea.value = "";
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
    alert("Por favor, digite ou cole o texto copiado para descriptografar.");
    return;
  }
  if (!validateInput(textArea.value)) {
    alert("Entrada inválida. Use apenas letras minúsculas, números e pontuação básica.");
    return;
  }
  const textoDescriptado = descriptografar(textArea.value);
  mensagem.value = textoDescriptado;
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

  
}