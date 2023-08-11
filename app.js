/*
* Objetivo:  
Autora: Maria Luiza 
Data: 11/08/2023
Versão: 1.0
*/


var readline = require('readline');

var entradaDados = readline.createInterface ({
input: process.stdin,
output: process.stdout
});

console.log ('********************************')

entradaDados.question('Adicione o primeiro número:' , function (primeiroNumero){
    let numero1 = primeiroNumero;

    entradaDados.question('Adicione o segundo número:' , function (segundoNumero){
        let numero2 = segundoNumero;

        entradaDados.question('Informe qual é a operção desejada +, -, x, %' , function(operacaoDesejada){
            let escolhasinal = operacaoDesejada;

            if(numero1 == null || numero2 == null ){
                console.log('ERRO preencha todos os dados!')
                
            } else if(isNaN(numero1) || isNaN(numero2) ){
                console.log('Insira um número válido')

            }

            numero1 = parseFloat (primeiroNumero)
            numero2 = parseFloat (segundoNumero)


            if(escolhasinal == '+'){
                let resultado = numero1 + numero2
                console.log('Resultado:' + resultado)
            } else if (escolhasinal == '-'){
                resultado = numero1 - numero2
                console.log('Resultado:' + resultado)

            }  else if (escolhasinal == 'x'){
                resultado = numero1 * numero2
                 console.log('Resultado ' + resultado)
           
            } else if (escolhasinal == '%'){
                resultado = numero1 / numero2
                console.log('Resultado ' + resultado)

            } else{
                console.log('ERRO preencha todos os dados!')
            } 
        




        });

    });

});