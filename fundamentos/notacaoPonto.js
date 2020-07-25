console.log(Math.ceil(6.4));

const obj1 = {};
obj1.nome = "Bola";
console.log(obj1.nome);

function Obj(nome) {
    this.nome = nome;
}

const obj2 = new Obj("Sofá");
const obj3 = new Obj("Computador");
console.log(obj2.nome);
console.log(obj3.nome);