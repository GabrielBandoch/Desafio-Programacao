const readline = require('readline-sync');

function inverterString(string) {
    let reversedString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
}

const palavra = readline.question('Digite uma palavra: ');

const palavraInvertida = inverterString(palavra);
console.log("Palavra invertida:", palavraInvertida);
