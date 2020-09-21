const numWords = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

const color = document.getElementById("color");
const entity = document.getElementById("entity");
const pass = document.getElementById("pass");

document.querySelector("button").addEventListener("click", () => {
    const colorVal = color.value.length;
    const entityVal = entity.value.length;

    const wordNumChar = colorVal;
    const numCharColor = numWords[colorVal - 1];
    const numCharEntity = entityVal;
    let combiSymbols = "";
    for (let index = 0; index < entityVal; index++) {
        combiSymbols += symbols[index];
    }
    const generatedPass = `${color.value}${numCharColor}${wordNumChar}${numCharEntity}${combiSymbols}`;
    pass.value = generatedPass;
});
