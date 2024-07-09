const inputText = document.getElementById('text');
const image = document.getElementById('image');
const output = document.getElementById('output');
const copyButton = document.getElementById('copyButton');
const errorMessage = document.getElementById('error');
const accentPattern = /[ÁÉÍÓÚÜÑáéíóúüñ]/;

const encryptText = (text) => {
    return text
        .replace(/a/g, "ai")
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

const decryptText = (text) => {
    return text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

let finalText = '';

function checkAccents(text) {
    let hasAccents = accentPattern.test(text);
    if (hasAccents) {
        errorMessage.classList.add("error");
    } else {
        errorMessage.classList.remove("error");
    }
    return hasAccents;
}

function encrypt() {
    finalText = '';
    let initialText = inputText.value.toLowerCase();
    let hasAccents = checkAccents(initialText);
    if (initialText.trim() === '') {
        window.location.reload();
    }
    if (initialText !== '' && !hasAccents) {
        finalText = encryptText(initialText);
        image.classList.add("hideImage");
        output.innerHTML = `<h1 class="center">${finalText}</h1>`;
        copyButton.removeAttribute('hidden');
    }
}

function decrypt() {
    finalText = '';
    let initialText = inputText.value.toLowerCase();
    let hasAccents = checkAccents(initialText);
    if (initialText.trim() === '') {
        window.location.reload();
    }
    if (initialText !== '' && !hasAccents) {
        finalText = decryptText(initialText);
        image.classList.add("hideImage");
        output.innerHTML = `<h1 class="center">${finalText}</h1>`;
        copyButton.removeAttribute('hidden');
    }
}

copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(finalText);
});
