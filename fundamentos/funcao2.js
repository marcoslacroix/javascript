// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b);
}
imprimirSoma(2, 3);

// Armazenando uma função em uma variável
const soma = (a, b) => {
    return a + b;
}
console.log(soma(3, 5));

// Retorno implicito
const subtracao = (a, b) => a - b;
console.log(subtracao(5, 3));