// aula 12 - functions

/*
FUNCOES

O QUE E?
Uma funcao em programacao e um grupo de codigo nomeado que
perform uma tarefa especifica
Dependendo da linguagem, ela tambem pode ser chamada de 
"subrotina" ou "procedimentos"

EXEMPLO:
*/
function ehPar(numero){
    return numero % 2 === 0
}
console.log(ehPar(5))
console.log(ehPar(4))

/*
POR QUE USAR?

- Desenvolvimento facilitado: O trabalho pode ser dividio entre
os membros do projeto e as implementacoes podem ocorrer 
paralelamente.
- Compartilhamendo de codigo possibilitado: Uma funcao pode ser
usadada depois por outros programas ou pessoas sem precisar 
recriar a funcao.
- Aumenta a legibilidade: Com elas voce pode criar uma camada 
de abstracao no codigo podendo ler o fluxo de execucao do 
codigo a nivel de negocio sem necessidade de ler as 
implementacoes exatas por cada parte do processo.
- Permite o dividir para conquistar: Como o codigo fica
segmentado, e possivel indentificar qual parte do processo
esta dando erro ou precisa ser alterada com mais facilidade, 
ja que a tarefa principal pode ser quebrada em varias
tarefas menores.

ESTRUTURA DA FUNCAO
 A funcao possui nome, paramentro e um retorno.
*/

function ehPar (numero){  //eh par >>> numero // numero >>> parametro
    var resultado  = numero % 2 === 0 //                 / >>> Corpo
    return resultado // return resultado >>> retorno    />>> Corpo
}

/*
CHAMADA DA FUNCAO
 Para executar uma funcao simples colocamos o nome dela
e depois colocamos os parametros com ().
 Se nao houver paramentros ele fica vazio.
*/
function imprimeOi(){
    console.log("oi")
}
imprimeOi()
/* RETORNO DA FUNCAO
Quando queremos retornar um valor da funcao utilizamos a 
palavra-chave "return" e o valor a ser retornado.
A plavra return tabem e uma confirmacao que nenhum codigo 
apos ela sera executado na funcao
*/

function imprimeOi (){
    return "oi"
}
var valor_que_retorno = imprimeOi ()
console.log(valor_que_retorno)

/*
FUNCAO SEM RETRONO
 Certas funcoes apenas executam uma tarefa e nao precisam 
de retorno. Sendo assim, podemos omitir a palavra return 
fazendo com que a ultima linha da funcao seja seu fim.
 Funcaos que nao retornam  valores sao chamadas de retorno
 "void" que e nada, o valor retornado em JS sera undefined.
*/
function funcaoVoid (){
    console.log ("oi porem nao vou retornar nada")
}

var retorno = funcaoVoid ()
    console.log (retorno)

/*
FUNCAO COM PARAMETROS

As funcoes podem receber 0 ou n parametros.
Os parametros efinidos apos  o nome serao variavesi que podem
ser utilizadas dentro do corpo da funcao e modificadas como
bem entender.
*/

function soma (numero1, numero2){
    return numero1 + numero2
}
console.log (soma(4,5))

/*
FUNCAO COM PARAMETROS POR VALOR
 As variaveis que passamos para as funcoes sao copias das 
 variaveis que referenciamos.  Por isso, mexer na variavel
 dentro da funcao nao altera o valor da variavel de referencia.

 
*/

function referenciaPorValor(x){
    console.log(x)
    x = 7
    console.log(x)
}
var x = 5
referenciaPorValor(x)
console.log(x)

/* DIRETRIZES DE FUNCOES 
Existem algumas diretrizes que nos ajudam a costruir funcoes 
melhores
- Cada funcao deve executar uma coisa e bem feita
- Tente manter funcoes enxutas e objetivas (funcoes longas
    tendem a fazer mais de uma coisa)
- Crie nomes que reresetam o que aquela funcao faz
- Nao tenha medo de utlizar nomes grandes
- Tente nao misturar muitos padroes de nome, como nao
misturar ingles com prtugues, nos nomes das coisas
(usa soo um ou outro)
- Toda tarefa pode ser quebrada em tarefas menores
*/