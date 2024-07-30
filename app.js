function encrypt() {
    let text = document.getElementById("textInput").value;
    if (!validInput(text)) {
        alert("El texto debe contener solo letras minúsculas y sin acentos.");
        return;
    }
    document.getElementById("informationSection").style.display = "none";
    document.getElementById("outputSection").style.display = "flex";
    document.getElementById("outputText").textContent = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function decrypt() {
    let text = document.getElementById("textInput").value;
    if (!validInput(text)) {
        alert("El texto debe contener solo letras minúsculas y sin acentos.");
        return;
    }
    document.getElementById("outputText").textContent = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function copy() {
    let text = document.getElementById("outputText").textContent;
    navigator.clipboard.writeText(text).then(() => {
        document.getElementById("buttonCopy").innerText = "Copiado en portapapeles";
        setTimeout(() => {
            document.getElementById("buttonCopy").innerText = "Copiar";
        }, 2000);
    });
}

function validInput(text) {
    return /^[a-z\s]*$/.test(text);
}
