/*
* Objetivo: Realizar a entrada de dois valores e a operação desejada (somar, subitari multiplicar e dividir)
Autora: Maria Luiza 
Data: 11/08/2023
Versão: 1.0


touppercase()- permite converter uma string em MAIUSCULO
tolowercase()- permite converter uma string em minusculo
replace - permite localizar um caracter e substituir por outro
*/

//import da biblioteca para entrda de dados 
var readline = require('readline');

//cria objeto para entrada de dados 
var entradaDados = readline.createInterface ({
input: process.stdin,
output: process.stdout
});

//entrada de dados 
console.log ('*****************************************************************')

entradaDados.question('Adicione o primeiro número:' , function (primeiroNumero){
    let numero1 = primeiroNumero.replace(',','.');

    entradaDados.question('Adicione o segundo número:' , function (segundoNumero){
        let numero2 = segundoNumero.replace(',','.');

        //entrada de dados referente a operção matemática
        entradaDados.question('Informe qual é a operção desejada +, -, x, %' , function(operacaoDesejada){
            let escolhasinal = operacaoDesejada;

           //validação para entrada de dados vazia e vaçidação para entrada de caracteres ao inves de números
            if(numero1 == "" || numero2 == "" ){
                console.log('ERRO preencha TODOS os dados!')
                
            } else if(isNaN(numero1) || isNaN(numero2) ){
                console.log('É obrigatório a entrada de valores numéricos')

            } else{
                let resultado;
                numero1 = Number (numero1)
                numero2 = Number (numero2)
               
                if(operacaoDesejada == '+'){
                    resultado = Number (numero1) + Number(numero2);
                }else if (operacaoDesejada == '-'){
                    resultado = Number (numero1) - Number(numero2)
                }else if (operacaoDesejada == 'x'){
                    resultado = numero1 * numero2
                } else if(operacaoDesejada = '%'){
                    resultado = numero1 / numero2
                }
            console.log(resultado);
            }


        });

    });

});