const WARNING_MESSAGE = "Solo letras minúsculas y sin acentos";
const COPY_MESSAGE = "Copiado en portapapeles";
const COPY = "Copiar";

function setVisibility(showInfo, showOutput) {
    document.getElementById("informationSection").style.display = showInfo ? "flex" : "none";
    document.getElementById("outputSection").style.display = showOutput ? "flex" : "none";
}

function encryptText(text) {
    text = text.replace(/e/g, "enter");
    text = text.replace(/i/g, "imes");
    text = text.replace(/a/g, "ai");
    text = text.replace(/o/g, "ober");
    text = text.replace(/u/g, "ufat");
    return text;
}

function decryptText(text) {
    text = text.replace(/enter/g, "e");
    text = text.replace(/imes/g, "i");
    text = text.replace(/ai/g, "a");
    text = text.replace(/ober/g, "o");
    text = text.replace(/ufat/g, "u");
    return text;
}

function processText(isEncrypting) {
    let text = document.getElementById("textInput").value;
    if (!validInput(text)) {
        alert(WARNING_MESSAGE);
        return;
    }

    if (text === "") {
        setVisibility(true, false);
    } else {
        setVisibility(false, true);
        if (isEncrypting) {
            document.getElementById("outputText").textContent = encryptText(text);
        } else {
            document.getElementById("outputText").textContent = decryptText(text);
        }
    }
}

function encrypt() {
    processText(true);
}

function decrypt() {
    processText(false);
}

function copy() {
    let text = document.getElementById("outputText").textContent;
    navigator.clipboard.writeText(text).then(() => {
        document.getElementById("buttonCopy").innerText = COPY_MESSAGE;
        setTimeout(() => {
            document.getElementById("buttonCopy").innerText = COPY;
        }, 2000);
    });
}

function validInput(text) {
    return /^[a-z\s]*$/.test(text);
}
