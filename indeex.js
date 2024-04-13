import  Prompt  from "prompt-sync";
let pergunte = prompt();

console.log('Calculadora');

console.log('Informe um numero:');
let n1 = Number(pergunte());

console.log('Informe outro numero:');
let n2 = Number(pergunte());

console.log('Informe a operação: (+, -, *, /)');
let op = pergunte();

let resultado = 0;

switch (op){
    case '+':
        resultado = n1 + n2;
        break;
    
    case '-':
        resultado = n1 - n2;
        break;
        
    case '*':
        resultado = n1 * n2;
        break
    
    case '/':
        resultado = n1 / n2;
        break   
    
    default:
        console.log ('Operação invalida');
        break    
}

console.log('o resultado e ' + resultado);
