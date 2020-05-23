//aula9 -for
/*

FOR

o loop e um compando que te comportamento
igual ao while, porem ele permite expressar contadores como 
parte do comando e nao como logica separa.

FOR E WHILE SIMETRICOS:

*/

for (var x = 0; x < 100; x ++){
    //executed util x >= 100
}
// loop for

var cont = 0;
while (count < 100){
    //do stuff
count++;
}
// loop while

/*
ESTRUTURA DO COMANDO FOR
 Dentro do comando for existem 3 partes separadas por;
 - A primeira parte sera executada antes de executar o bloco
 de codigo do loop.
 - A segunda parte e a condicao necessaria para que o loop 
 continue executando (assim como fazemos no while)
 - A terceira parte sera executada ao fim de cada rodada
 do loop e normalmente e usada para atualizar o contador.
*/

for (var i = 0; i < tamanhoPalavra; i = i + 1){
    console.log (palavra.charAt(i);)
}

/*
FOR 

EXEMPLO RESOLVIDO 1
Faca um algoritimo que receba um numero e imprima a plavra 
"Ola mundo n", onde n e o numero atual da repeticao
*/

var readlineSync = require('readline-sync')
var numero = readlineSync.question("Insira o numero: ")

for (var i = 1; i <= numero; i = i +1 ){
    console.log ("Ola mundo" + i)
}

/*
FOR 

EXEMPLO RESOLVIDO 2
Faca um algoritmo que receba uma palavra e imprima
cada caractere da palavra em uma linha

*/

 var readlineSync = require ("readline-sync")
 var palavra = readlineSync.question ("Insira a palavra: ")

 var tamanhoPalavra = palavra.length
 for (var i = 0; i < tamanhoPalavra; i =i + 1){
     console.log(palavra.charAt(i))
 }

 /*
 
 */