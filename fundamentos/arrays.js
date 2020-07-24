const valores = [7.5, 6.4, 2.1, 6.3];
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10;
console.log(valores[4]);
console.log(valores.length);
valores.push("teste");
console.log(valores);

console.log(valores.pop());
console.log(valores);

console.log(typeof valores);