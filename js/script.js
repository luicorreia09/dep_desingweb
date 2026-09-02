var nome = "pedrina";
let nasc = 1991;
const viva = confirm("Clique em ok, se Estiver Viva");

let altura;

function calcIdade(ano = 2026){
    let idade = ano - nasc;
    console.log(`idade dentro da função: ${idade}`);
    let menor;      
    if(idade < 18){
         menor = true;
    }else{
         menor = false;
    }
    return [idade, menor];
}
let retorno = calcIdade()
if (retorno[1]){
    alert(`Idade: ${retorno[0]}. Você é menor de idade`);
}else{
    alert(`Idade: ${retorno[0]}. Você é maior de idade`);
}
alert(`idade fora da funcao: ${calcIdade()}`);


if (viva){
    altura = prompt("digite a sua altura");
}
          