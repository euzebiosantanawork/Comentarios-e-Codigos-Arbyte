//aula11 - arrays e strings
/*
ARRAYS

O QUE E?
Os Arrays sao uma estrutura de dados. Das estruturas existentes,
essa e a mais basica da programacao.
Um array e uma variavel que possui uma colecao ou lista de 
valores armazenados em sequencia.
Em JavaScript, os arrays podem guardar valores de diferentes
tipos
*/
var frutas_do_slide =["banana","maca", "pera"]

//SINTAXE

var arrayComFrutas = ['banana',"maca","pera"]
var arrayVazio = []

/*
PROBLEMA PARA RESOLVER
 Faca um programa que leia 5 numeros e no final faca a soma 
 de todos eles e exiba o resultado de forma que apareca toda
 operacao.

 SEM UTILIZAR ARRAY:
*/

var rs = require("readline-sync")
//Coleta os numeros
var n1 = rs.question("Insira o numero 1: ")
var n2 = rs.question("Insira o numero 2: ")
var n3 = rs.question("Insira o numero 3: ")
var n4 = rs.question("Insira o numero 4: ")
var n5 = rs.question("Insira o numero 5: ")

//faz  soma
var resultado = n1 + n2 + n3 + n4 + n5

//Exibe o resultado bonitinhi
console.log(`${n1}+${n2}+${n3}+${n4}+${n5} = ${resultado}`)

/*
PROBLEMA PARA RESOLVER
 Faca um programa que leia 5 numeros e no final faca
 a soma de todos eles e exiba o resultado de forma que
 apareca toda na operacao.
*/

var rs = require("readline-sync")
var numeroInserido = [] //Inicializado como array
var resultado = 0
//Coleta os numeros
for (var i = 0; i < 5; i++){
    var numeroInserido = rs.questionInt(`Insira o numero ${i} :`)
    //Adiciona o elemento no array utilizando o metodo "push"
    numeroInserido.push(numeroInserido
    // Ja fez a somatoria do resultado
    resultado = resultado + numeroInserido
};

//Exibe resultado bonitinho
var paraImprimir = ""

for(var i = 0 < numeroInseridos.length; i++){
    paraImprimir = `${paraImprimir} + ${numeroInserido{i}}`
}
paraImprimir = paraImprimir + "=" + resultado
console.log(paraImprimir)

/*
VANTAGENS DO USO:
E se o problema mudasse para: "Agora nao iremos ler 5 numeros, 
mas sim 100 numero"?
Apenas mudaria o contador
*/

var rs = require("readline-sync")
var numeroinserido = [] //Inicializado como array
var resultado = 0
//Coleta os numeros
for (var i = 0; i < 100; i++){
    var numeroInserido = rs.questionInt(`Insira o numero ${i} :`)
    //Adiciona o elemento no array utilizando o metodo "push"
    numeroInserido.push(numeroInserido
    // Ja fez a somatoria do resultado
    resultado = resultado + numeroInserido
}

//Exibe resultado bonitinho
var paraImprimir = ""

for(var i = 0 < numeroInseridos.length; i++){
    paraImprimir = `${paraImprimir} + ${numeroInserido{i}}`
}
paraImprimir = paraImprimir + "=" + resultado
console.log(paraImprimir)

/*
COMO CRIAR?
 Ha duas maneiras principais de se criar um
array em JavaScript:
- usando colchetes
- usando  funcao Array()

Por simplicidade e legibilidade, recomendo usar 
o primeiro metodo

criando arrays vazias:
*/

var carros = [] // cria uma array vazia chamada carros
var carros = new Array () //tambem cria uma array vazia

// criando arrays ja com elementos:

var carros = ['volvo','bmw','alfa romeo']

/*
O QUE PODE SER ARMAZENADO?
 Qualquer objeto pode ser armazenado dentro de um 
 array, inclusive outros arrays.
 Diferente de outras linguagens, o JavaScript tambem
 nao requer que haja congruencia entre os tipos de 
 valores dentro de um array. Ou seja, um array, pode 
 ser um conjunto de objetos de tipos diferentes:
*/

var cadastro = [
    ['frozen','shrek','kill bill'], 
    27,
    "Rafael Magalhaes",
    "arbyte",
    {
        'endereco':"Rua Fidencio Ramos"
        'numero': 100,
        'cidade': "Sao Paulo"
    }
]

/*
FUNCIONAMENTO
 Os arrays possem tamanhos de acordo com a quantidade de elementos
que contem.
 Cada valor no array pode ser referenciado utiliando um 
indentificador inteiro, chamado indice. Isto faz com que cada
indice possua apenas um valor

VALOR:07 11 06 55 98 45 16 96 46
INDEX:00 01 02 03 04 05 06 07 08

00 >>>> Lower Bound
08 >>>> Upper Bound

Array Length = 09

PRINCIPAIS METODOS E ATRIBUTOS
Todos os metodos e atributos existentes no array odem ser 
consultados na w3schools, mas vamos destacar alguns que vao 
nos ajudar mais ns proximas atividades.

- arr.push(elemento)
adiciona o elemento elm no final do array
- arr.pop()
remove o ultimo elemento do array
- arr.shift()
igual o pop, porem remove o primeiro elemento
- arr[index]
retorna o elemento pelo indice informado
-  arr.length
retorna a quantidade de elementos do array
- arr.splice (index, quantidade)
Permite adicionar ou remover elementos informando indice 
e quantidade
- arr.concat(arr2)
Permite concatenar dois arrays em um so, sequencialmente
- arr.join(separador)
exibe uma string concatenado todos elementos de um array, 
unidos por um separador especifico ( o valor padrao e virgula)

EXEMPLO:
*/

var frutas = [];
frutas.push("banana")
frutas.push("morango")
frutas.push("abacate")
for(var i = 0; i < frutas.length; i++ ){
    console.log(frutas[i])
}
/*
VALUE: Banana Morango Abacate
INDEX: 00     01      02
*/

var frutas = [];
frutas.push("banana")
frutas.push("morango")
frutas.push("abacate")
frutas.shift()
for(var i = 0; i < frutas.length; i++ ){
    console.log(frutas[i])
}

/*
VALUE: Banana Morango Abacate
INDEX: 00     01      02

usano o shift()
VALUE: Morango Abacate
INDEX: 00      01  

EXEMPLOS:
*/

var ar=["rafael","ivan", "iago","marina","kobus"]
console.log (ar.join(""))
ar [0] = "italo"
console.log(ar.join('\n'))

/*
Podemos alterar um elemento de um array assinalando
um valor aquele indice do array

No primeiro log, unimos os elementos com o uso 
de um "espaco"

No log seguinte, mudamos o caractere de join para
"\n" que e o caractere de escape de quebra de linha

STRINGS

O QUE E?
Uma string nada mais e que um array de caracteres, no qual
cada elemento do array e representado por um caractere

   INDEX: 00      01      02      03      04      05
VARIABLE: H       e       l       l       o       0\
 ANDRESS: 0x23451 0x23452 0x23454 ox23454 0x23455 0x23456

 Apesar de ser uma array, strings tem metodos proprios
tamanha a popularidade de seu uso

COMO CRIAR?
As strings podem ser inicializadas utilizando o"" ou''


*/

var primeira_string = "Minha primeira string"
var segunda_string = 'Minha segunda string'

/* Se quisermos colocar aspas dentro de uma string precisamos
usar caracteres de escape ou alternar o uso de aspas de acordo
com o nosso uso

CONCATENACAO DE STRINGS
A concatencao de strings e literalmente juntar os dois textos
um apos o final do outro.
Essas operacoes podem ser feitas utilizando o +


*/
var primeira_string = "ola"
var segunda_string ="tudo bem"
var ola_tudo_bem = primeira_string + ""+segunda_string
console.log(ola_tudo_bem)

/*
Antes da operacao de concatenacao ocorrer, os tipos de todas
de todas as variaveis envolvidas na operacao sao checados. 
Se um objeto for encontrado, ele e convertido para string.

INTERPOLACAO DE STRINGS

INTERPOLACAO: Introducao ou intercalacao de palavras ou frases
em um texto. Cessacao, Interrupcao. Interpolar: diz-se de algo 
que esta situado entre os dois polos de um sistema.

A interpolacao e uma maneira flexivel e enxuta de criar
strings com variaveis diferentes.

Ele utiliza '' e indentifica as variaveis com:
*/

var primeira_string ="ola"
var segunda_string = "tudo bem"
var ola_tudo_bem = `${primeira_string}${segunda_string}`
console.log (ola_tudo_bem)

/*
MULTILINHAS EM STRINGS
 Para criar textos amiores usamos \ no final de cada
 linha e quando queremos terminar a string utilizamos ""
*/

var string_multi_linha = "ola\
venho de um lugar muito longe escrever\
Esse texto erno para dizer que\
barras podem fazer minha string\
continua crescendo porem\
as aspas podem dar fim a minha\
pequena byteVida"

console.log(string_multi_linha)

/*
PRINCIPAIS METODOS

como a string e um objeto, ela possui uma infinidade
de metodos que podem ser consultados. Vamos destacar
alguns:
- str.length
Permite saber quantos caracteres a string possui
- str.charAt(posicao)
Retorna o caractere para a posicao informada, lembrando que
a primeira posicao comeca com 0. E o mesmo que usar os 
colchetes [posicao]
- str.slice(inicio,fim)
Retorna as letras a partir de um inicio e fim
- str.toLowerCase e str.toUpperCase
Diminui ou aumenta a caixa de texto (LETRAS MAIUSCULAS
OU LETRAS MINUSCULAS)
- trim ()
Remove espacoes e brancos no comeco ou fim de 
texto (e possivel escolher outra coisa alem de espaco
em branco)
- includes()
Permite saber se a string contem um certo texto
- indexOf(palavra)
Retorna o indice no qual uma palavra e encontrada
numa string 
-split/tokenize()
Permite separar a string em um array de caractere

ALGUNS CONCEITOS
- strings sao imutaveis
Isto significa que toda string e uma coisa nova, Se voce cria 100
strings em um loop, existem 100 textos na memoria.
- substrind
E um trecho de uma string maior
EXEMPLO: "oog" e uma substring de "Google"
- prefixo
E a substring que esta no comeco da string.
EXEMPLO: "Google" e prefixo de "Google Docs", "Google Sheets",
"Google Drive"
- sufixo
E a substring que esta no final da string
EXEMPLO: "drive" e o sufixo de: "google Drive", "one drive", 
"Hard Drive"
- capitalizacao/ Case Folding
E a caixa de texto da string. Letras maisculas ou letras
minusculas

*/