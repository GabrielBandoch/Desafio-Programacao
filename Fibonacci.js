const readline = require('readline-sync');

function verificarFibonacci(numero) {
    let anterior = 0;
    let atual = 1;

    while (atual < numero) {
        const proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
    }

    if (atual === numero) {
        return `${numero} pertence a sequencia de Fibonacci.`;
    } else {
        return `${numero} não pertence a sequencia de Fibonacci.`;
    }
}

const numero = parseInt(readline.question('Digite um numero para verificar na sequencia de Fibonacci: '));

const resultadoFibonacci = verificarFibonacci(numero);
console.log(resultadoFibonacci);
