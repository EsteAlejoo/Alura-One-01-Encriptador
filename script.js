let inputText = document.querySelector('[data-inText]')
let btnEncriptar = document.querySelector('[data-btnEncriptar]');
let btnDesencriptar = document.querySelector('[data-btnDesencriptar')
let outputText = document.querySelector('[data-outText]');

btnEncriptar.addEventListener("click", function () {
    let textoAEncriptar = inputText.value;
    let stringEncriptada = encriptar(textoAEncriptar);
    outputText.value = stringEncriptada
    console.log("Texto Desencriptado");
});

function encriptar(textoAEncriptar) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"],
    ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    textoAEncriptar = textoAEncriptar.toLowerCase();
    let textoEncriptado = ""

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (textoAEncriptar.includes(matrizCodigo[i][0])) {
            textoAEncriptar = textoAEncriptar.replaceAll(
                matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    textoEncriptado = textoAEncriptar;
    return textoEncriptado;
}

btnDesencriptar.addEventListener("click", function () {
    console.log("Boton cliqueado")
    let textoADesencriptar = inputText.value;
    let stringDesencriptada = desencriptar(textoADesencriptar);
    outputText.value = stringDesencriptada
    console.log("Texto Desencriptado");
})

function desencriptar(textoADesencriptar) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"],
    ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    textoADesencriptar = textoADesencriptar.toLowerCase();

    let textoDesencriptado = ""
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (textoADesencriptar.includes(matrizCodigo[i][1])) {
            textoADesencriptar = textoADesencriptar.replaceAll(
                matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    textoDesencriptado = textoADesencriptar
    return textoDesencriptado;
}

let copiarTexto = document.querySelector('[data-btnCopy]')
copiarTexto.addEventListener("click",
    function copiar() {
        outputText.select();
        navigator.clipboard.writeText(outputText.value)
        outputText.value = "";
        alert("Texto Copiado")
    })

