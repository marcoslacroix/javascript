console.log(typeof Object);
console.log(typeof new Object());

const Cliente = function() {}
console.log(typeof Cliente);
console.log(typeof new Cliente());

class Produto {}
console.log(typeof Produto);
console.log(typeof new Produto());

var cliente1 = new Cliente();
var cliente2 = new Cliente();
console.log(cliente1.nome = "Marcos");
console.log(cliente2.nome = "Pedro");
if (cliente1.nome == cliente2.nome) {
    console.log("Nomes iguais!");
}else{
    console.log("Nomes diferentes.");
}
