var nasc = parseInt(prompt("digite seu ano de nascimento: "));
let nome = prompt("digite seu nome: ");
const viva = true;
let altura = parseFloat(prompt("digite sua altura em metros: "))
let idade;

if (viva){
idade = 2026 - nasc;
    alert(`${nome} você tem ${idade} anos.`);
}else {
    alert(` você está morta.`);
}

alert("Fim"); 