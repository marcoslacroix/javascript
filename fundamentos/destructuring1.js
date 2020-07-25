// Destruturar um Objeto
const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        longradouro: "Rua ABC",
        numero: 100
    }
}

const { nome, idade} = pessoa;
console.log(nome, idade);

const { endereco: {longradouro, numero}} = pessoa;
console.log(longradouro, numero);

const { sobrenome, bemHumorada = true} = pessoa;
console.log(sobrenome, bemHumorada);