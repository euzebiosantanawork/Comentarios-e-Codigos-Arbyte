/*
Faca um Algoritimo que recebe dois 
numeros e diz qual o maior

*/

var readlineSync = require("readline-sync");

var numero1 = readlineSync.question ("Insira o numero 1? ");
var numero2 = readlineSync.question ("Insira o numero 2? ");

if (numero1 > numero2){
    console.log ("Numero: "+ nuemro1 + "e maior")
} else if (numero1 < nuemro2) {
    console.log ("Numero: "+ numero2 + "e maior")
} else {
    console.olg (" Os numeros sao iguais")
}