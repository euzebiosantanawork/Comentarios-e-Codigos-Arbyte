//aula7 - While Loop
/*
While

Como resolveriamos?
 
Faca um programa onde o usuario tenta adivinhar
 um numero entre 1 e 50.
Se ele errar o chute, peca novamente o numero. 
 Caso ele acerte de uma mensagem
de uma mensagem de parabenizacao e mostre um
poema


Insira um numero: 33
Hmmm, ifelizmente voce errou, Tente de novo: 47
Hmmm, infelizmente voce errou, Tende de novo: 22
Parabens, voce acertou! Eis aqui um poema.

Para ser grande, se inteiro: nada
Teu exerga ou exclui.
Se todo em cada coisa.
Poe quando es no minimo que fazes
Assim em cada lago a lua toda.
Brilha, porque alta vive.

Ricardo Reis, 1933

COMO RESOLVERIAMOS?

Vamos precisar de um loop, laco de repeticao!

WHILE
Em problemas que envolve repeticoes, seja de forma 
finita ou infinita vamos suar os loops.

Existem varios tipos de loops, mas hoje aprenderemos
o while.

Outros loops famosos sao:
for 
foreach
do/while

WHILE

SOLUCIONANDO FATORIAL COM WHILE
Imagine que e solicitado fazer um programa que receba um
numero e e calculado o seu fatorial

utilizando o while:
*/

var readlineSync = require ("readline-sync")
var numeroFatorial = readlineSync.question("\
Insira o numero para calcular fatorial: ")
var resultado =1
while (numeroFatorial > 1){
    resultado = numeroFatorial * resultado
    numeroFatorial = numeroFatorial - 1

}

// INFINITOS IF ...
console.log(resultado) // imprime resultado

// SINTAXE

var condicao = numeroFatorial > 1
while (condicao){ //inicio do loop
    resultado= numeroFatorial*resultado // primeira instrucao
    numeroFatorial = numeroFatorial - 1 // segunda instrucao
} // fim do loop

/*Observacoes:
- while: palavra reservada
- condicao: se a condicao for verdadeira, o loop executa
novamente a partir da primeira linha do bloco, logo apos
a ultima. Caso contrario, ele ignora o bloco while.
- { marca o inicio do loop
- } marca o final do loop
- loops podem ter outros loops

WHILE 

COMANDO BREAK

Podemos tambem quebrar o loop utilizando a palavra chave break;

VAMOS utilizar o break em:
- Erros no codigo podem levar ao uso do break
- Quando estamos procurando valores em uma pasta
ou arquivo e ja achamos o valor que precisamos, podemos
usar o break para nao realizar loops desnecessarios.
*/

var rs = require ("readline-sync")
var numeroFatorial = rs.question ("Insira o numero para \
calcular fatorial: ");
var resultado = 1

// quando a condicao true implica em loop infinito
while(true) {
    resultado = numeroFatorial * resultado
    numeroFatorial = numeroFatorial - 1
    if(numeroFatorial > 1){
        //podemos usar o break para quebrar o loop tambem
        break;


    }
}
console.log (resultado); //imprime resultado
