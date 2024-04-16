# Desafio de Programação

Neste repositório, você encontrará minha solução para o desafio de programação proposto pela Target.

## Desafios Propostos

O desafio consiste em resolver dois problemas de programação:

1. **Verificação da Sequência de Fibonacci:** O programa verifica se um número fornecido está presente na sequência de Fibonacci.
2. **Inverter os Caracteres de uma String:** O programa inverte os caracteres de uma string fornecida pelo usuário.

## Solução Implementada

A solução consiste em dois scripts independentes, um para cada desafio:

### 1. Verificação da Sequência de Fibonacci

Este script implementa uma função que verifica se um número fornecido está presente na sequência de Fibonacci. Ele utiliza um método eficiente para calcular a sequência de Fibonacci até o número fornecido e verifica se o número está presente na sequência.

```javascript
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
        return `${numero} pertence à sequência de Fibonacci.`;
    } else {
        return `${numero} não pertence à sequência de Fibonacci.`;
    }
}

const numero = parseInt(readline.question('Digite um número para verificar na sequência de Fibonacci: '));

const resultadoFibonacci = verificarFibonacci(numero);
console.log(resultadoFibonacci);
```

### 2. Inverter os Caracteres de uma String

Este script implementa uma função que inverte os caracteres de uma string fornecida pelo usuário.

```javascript
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
```

## Como Executar

Para executar cada script individualmente, basta utilizar um ambiente de execução para JavaScript, como o Node.js. Certifique-se de ter o Node.js instalado em seu sistema e execute os scripts conforme necessário.

## Contribuindo

Se você tiver sugestões de melhorias ou encontrar problemas na solução proposta, sinta-se à vontade para abrir uma issue ou enviar um pull request.
