let nome = prompt("digite seu nome:");
let nasc = Number(prompt("digite seu ano de nascimento:"));
let viva = confirm("clique em ok se estiver vivo. caso contrário, cancelar");
let altura = prompt("digite sua altura:");
altura = Number(altura);
let sexo = prompt("digite seu sexo:");
let peso = prompt("digite seu peso");
peso = Number(peso);
let imc  = peso/altura;

console.log("nome", typeof(nome));
console.log("nas", typeof(nasc));
console.log("viva", typeof(viva));
console.log("altura", typeof(altura));
console.log("sexo", typeof(sexo));
console.log("peso", typeof(peso));
console.log("imc", typeof(imc)); 

let msg = `Nome: ${nome}\nano de Nascimento:${nasc}\nVivo: ${viva}`;
msg = msg + `\nAltura: ${altura}\nSexo:${sexo}\nPeso: ${peso}`;
msg = msg + `\nIMC: ${imc.toFixed(2)}`;

alert(msg);