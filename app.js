const WARNING_MESSAGE = "Solo letras minúsculas y sin acentos";
const COPY_MESSAGE = "Copiado en portapapeles";
const COPY = "Copiar";

function encrypt() {
    let text = document.getElementById("textInput").value;
    if (!validInput(text)) {
        alert(WARNING_MESSAGE);
        return;
    }
    if (text === "") {
        document.getElementById("informationSection").style.display = "flex";
        document.getElementById("outputSection").style.display = "none";
    } else {
        document.getElementById("informationSection").style.display = "none";
        document.getElementById("outputSection").style.display = "flex";
        document.getElementById("outputText").textContent = text
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    }
}

function decrypt() {
    let text = document.getElementById("textInput").value;
    if (!validInput(text)) {
        alert(WARNING_MESSAGE);
        return;
    }
    if (text === "") {
        document.getElementById("informationSection").style.display = "flex";
        document.getElementById("outputSection").style.display = "none";
    } else {
        document.getElementById("informationSection").style.display = "none";
        document.getElementById("outputSection").style.display = "flex";
        document.getElementById("outputText").textContent = text
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    }
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
