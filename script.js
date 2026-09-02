var nome = "pedrina";
let nasc = 1991;
const viva = confirm("Clique em ok, se Estiver Viva");

let altura;

function calcIdade(ano = 2026){
    let idade = ano - nasc;
    console.log(`idade dentro da função: ${idade}`);
    return idade;
}
alert(`idade fora da funcao: ${calcIdade()}`);


if (viva){
    altura = prompt("digite a sua altura");
}
