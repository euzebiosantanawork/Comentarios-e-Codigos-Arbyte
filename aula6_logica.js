// Intro a Logica de Programacao

/*
 O QUE E LOGICA?
  O principal objetivo da logica de programacao e 
fazer voce pnesar de forma logica.E a ferramenta 
que vai permitir voce fazer as coisas em linguagem de
programacao. Isso permite que os problemas sejam 
solucionados da mehlor forma possivel de acordo com o 
contexto que se encontram.

O QUE VAMOS APRENDER EM LOGICA?
- algoritimos
- linguagem natural x linguagem de programacao
- tabela booleana
- programa ola mundo!
- declaracao de variavel
- expressoes aritimeticas
- abrir VS Code e iniciar javascript
- usando terminal do vs Code
- expressoes (+-*//** sqrt()) + precedencia
- expressoes comparativas
- estrutura condicional if/else
- estrutura de repeticao - while
- vetores
- matrizes slg

 E NESTA AULA?
 Vamos escrever nosso primeiro algoritimo em Javascript!
O algoritimo que iremos construir recebe dois numeros
e decide qual e o maior.
 Mas para isso vamos precisar:
- Entender o que e um algoritimo
- Ter uma nocao de como o algoritimo e executado
- Sintaxe basica de um programa JS
- Exibir conteudo no console
- Variaveis
- Receber dados de entrada do ususario
- Operacoes aritimeticas
- tabela verdade
- Estrutura Condicional
- Muitos exercicios

ALGORITIMO

EXERCITANDO A MENTE
 Suponha que estamos dirigindo de carro e ouvimos o barulho 
do pneu furado e decidimos troca-los

 O que e preciso ser feito?
Descreva todos os passos para trocar o pneu no notepad ou em 
uma folha de papel
 o que e?
 Existem basicamente 3 tipos de representacao de algoritimos. 
Vamos usar o exemplo abaixo para representar cada uma delas.
// Sacar dinheiro do banco 24 horas
Descricao Narrativa:
1. Ir ao banco
2. Colocar o catao
3. Digitar a senha
4. Solicitar a quantia
5. Se houver saldo suficiente para o saque, realizar o saque.
Caso contrario exibir a mensagem saldo insuficiente
6. Retirar o cartao
7. Sair do banco
// pseudocodigo ou linguagem estruturada
 */
var caixa = new caixaEletronico () // busca o caixa eletronico
var agencia = console.read() // le agencia do usuario
var conta_corrente = console.read () // le conta corrente
var senha = console.read() //le senha
var valor = console.read() // le valor
conta = caixa.abrirConta (agencia, conta_corrente, senha)
//abre conta do usuario
var saque = conta.realizarSaque (valor) 
// realizar o saque passando o valor
if (saque.suficiente()){
    saque.efetuarSaque() //enviar as notas para o usuari
} else {
    console.log ("Saldo insuficiente") //diz que nao ha saque
}

/* Em liguagens orientadas a objetos, usando padroes de projetos 
conseguimos aproximar bastante a verbosidade do que estamos
fazendo no codigo como nossa "linguagem natural".

JAVASCRIPT
o que e?
 JavaScript (frequentemente abreviado como JS) e uma linguagem
 de programacao interpretada e estruturada, de escript  em alto
 nivel com tipagem dinamica e multi-aradigma (prototipois, 
    orientado a objeto, imperativo e funcional).
     Juntamente com HTML e CSS, o JavaSript e uma das tres
principais tecnologias da World Wide Web.
 O javascript permite paginas da Web interativas e portanto, 
 e uma parte essencial dos aplicativos da web. A grande
maioria dos sites e todos os principais navegadores tem um
mecanismo JavaScript dedicado para executa-lo. 

SETUP  NA MAQUINA
 Para isso vamos precisar do node.js
 Node.js nao e um framework Javascript.
Ele esta mais para uma plataforma de aplicacao na qual voce escreve
seus programas com JavaScript que serao compilados, otimizados 
e interpretados pela maquina virtual V8. 
 Essa Vm e  a mesma que o Google utiliza para executar 
Javascript no browser Chrome, e foi a partir dela que o criador
do Node.js. Ryan Dahl criou o projeto. O resultado desse 
processo e a execucao do Javascript como qualquer outro arquivo
".exe"

COMO O PC "ENTENDE" JS?
 O V8 e um programa que le o Javascrip e converte em instrucao
 para o computador executar/

ANTES DE TUDO
 Para as atividade de logica que vamos escrever daqui em diante
queremos garantir alguns passos antes.
1. Precidamos do Node instalado a maquina
2. Vamos criar um repositorio no GitHub chamado "Logica"
3. Faremos clone desse repositorio para alguma pasta do computador
4. E vamos fazer nosso primeiro programa hello-world.js

SINTAXE
 o primeiro algoritimo que vamos desenvolver e um que le 
 dois numeros e diz qual o maior

 Algoritimo: que recebe dois numeros 
 e diz qual e o maior
*/

var readlineSync = require('readline-sync') 
// chama pacote de entrada do ususario
var numero1 = readlineSync.question ("Insira o numero 1: ")
// le a entrada do ususario
var numero2 = readlineSync.question ("Insira o numero 2: ")
// le a entrada do usuario

if(numero1 > numero2){
    console.log("Numero : " + numero1 + "e maior")
    // se numero1 for maior   
} else if (numero1 < numero2){
    console.log ("Numero: " + numero2 + "e maior ")
    // se numero32 for maior
}else {
    console.log ("Os numeros sao iguais");
    //se nao e maior nem menor entao e igual
}
/*
CONSOLE.LOG
 O primeiro comando que vamos aprender e o de imprimir 
caracteres no console.
1. vamos criar um arquivo na nossa pasta que aponta para
o repositorio "logica"
2. o nome do arquivo sera "hello-word.js"
3. apois isso, vamos escrever nosso codigo.

EXECUTANDO NOSSO CODIGO NO VSCODE
o primeiro comando que vamos parender e o de imprimir
caracteres no console.
1. Para executar o codigo fonte devemos selecionar o menu
Terminal e depois a opcao "New Terminal"
2.No terminal vamos inserir o comando node.\{nome-do-arquivo}.js
e dar ENTER para executar o nosso progrma.

IMPRIMIR MAIS LINHAS
Se adicionarmos mais comandos de console.log(""); eles serao
imprimidos um apos o outro em sequencia.

CONCLUSOES ATE AGORA
 Se adicionarmos mais comando de console.log eles serao imprimidos
um apos o outro em sequencia.
*/
console.log("Ola Mundo")
console.log(" Mundo ola")
console.log("Voces sao grandes DEVS")
/*
os codigos sao executados de cima para baixo, linha apos linha
fucao console.log imprime valor recebido no console
paramentro: conteudo valor a ser imprimido

COMENTARIOS
Comentarios sao carcteres que nao serao exeutados. Eles podem
ter 1 linha ou varias, e podem ser escritos apos qualquer comando.
Comentarios de uma ou mias linhas podem ser iniciados por:
/* */ /*
Comentarios que terminam no final da linha sao indicados com //
_ Podem ser usados desde o inivio da linha ou colocados depois
do cogido funcional. desde que nao haj aum carctere de quebra de
linha no comentario

VARIAVEIS
 a variavel e o que nos permite associar um dado na memoria
 sua estrutura e composta por 3 propriedades.
TIPO
 os tipos podem ser primitivos ou ovjetos
NOME
 Vai depender do encondig Entretanto, existe uma covencao
de utilizar nomes que nao possuem caracteres especiais
exceto _ou- em geral
VALOR 
-Existe umm valor para representar NADA (null ou undefined)
-O valor vai corresponder seu tipo atual
-Se atribuir outro valor, automatiamente altera o tipo


*/
var nome //criacao da variavel
nome = "Fulano" // atribuindo texto apos criacao
var idade = 20 // criando a variavel e colocando o valor para 20

var idade = 20 // idade e nome; = e atribuicao, 20 e valor

/*
Por enquanto vamos precisar apenas enteder os tipos primitivos

STRING
 Sao os textos que podem ser representados por "Fulano Arbyte"
 Elas podem ser concatenada (jutadas) usando o operador +
exemplo: "console.log('string1' + 'string2')"
sera exibido: string1strig2

NUMEROS
BOLEANOS
 Podem ter dois valore: true ou false
NULOS
 Os tipos nulos sao vaiaveis que nao pssuem valor
sao representados por null ou undefined
*/

var numero = 7 // tipo number
var texto = "aqui esta uma string" // tipo string
var pensoLogoExisto = true // tipo boleado
var variavelSemNada // valor nulo
var variavelSeNadaComAtribuicao = null //valor nulo
var variavelSemNadaComundefined = undefined //valor nulo

/* 
DADOS DE ENTRADA
 Para recebermos dados do usuario vamos usar uma biblioteca
 que permite interacao de leitura com console
*/

var user = require("readline-sync")
// importa a biblioteca readline-sync na variavel user

var resultadoDoUsuario = user.question("Insira sua pergunta\
aqui: ")//chama metodo question da biblioteca readline-sync
console.log("O usuario inserio: "+resultadoDoUsuario);

/*
OPERACOES ARITIMETICAS

Podemos fazer operacoes basicas de matematica usando
numeros como:
adicao: utulizando o simbolo +
subtracao: utilizando o simbolo -
divisao: utilizando o simbolo /
multiplicacao: utilizando o simbolo *
modulo: utilizando o simbolo %

OPERACOES ARITMETICAS - PRIORIDADES

Para determinarmos a propriedade de um calculo usamos 
parentes igual na Matematica.
Porem se temos varias prioridades na expressao continuamos
abrindo niveis inferiores com parentes
A execucao do calculo comeca de dnetro para fora

*/

console.log ((5+10) * 2)// =30
console.log (5 + 10 * 2) // = 25
console.log (((2+2)+(2*2)) *2)//=16

/*
Dentro da mesma propriedade a execucao matematica e respeitada
(primeiro divisao e multiplicacao e depois adicao e subtracao)

vamos executar esses codigos na nossa maquina e ver o resultado?

OPERACOES LOGICAS

Alem das operacoes aritimeticas, temos operacoes logicas 
dentro da programacao. Elas vao nos permitir controlar o fluxo 
logico do codigo fonte. Essas operacoes sao feitas utlizando 
valores booleanos ao inves de numeros.

VALOR BOOLEANO
boolean (booleano) e um tipo de dado primitivo que possui dois
valores, que podem ser considerados como 0 ou 1, falso ou 
verdadeiro. Chamado boolean em homenagem a George Boole, que 
definiu um sistema de logica algebrica pela primeira vez nam
merade do seculo XIX.
 Ele e usado em operacoes logicas como conjuncao, disjjuncao, 
 disjuncao exclusica, equivalencia logica e negacao. que 
 correespodem a algumas das operacoes da algebra booleana.
OPERACOES LOGICAS - TABELA DE VERDADE
 Um sistema que auxilia a resolucao de operacoes logicas
 e a Tabela de Verdade, geralemnte representada entre duas 
 variaveis e o resultado que a operacao gera.

 AND 

Operador E OU AND representado pelo simbulo && em JS, somente
retoma verdadeiro quando o valor p e q sao verdadeiros
tambem, caso contrario a expressao retorna falso.

OR

OPERADOR OU ou OR representado pelo simbulo || (pipe pipe)
em JS, somente remota verdadeiro quando existir ao menos 1 
valor verdadeiro em p eq, e somente retorna falso caso os 
dois sejam.

NEGACAO

Operador negacao, representado pelo simbolo ! em JS
inverte o valor booleano, se e verdadeiro vira falso
e vice e versa.

CONDICIONAL
ESTRUTURA CONDICIONAL
 Utilizamos estruturas de condicao quando exsitem isntrucoes
 dentro do programa que somente devem executar se sastisfazarem
 uma determinada condicao

 EXEMPLO: se numero X for maior que numero Y.
 if(condicao){
     bloco de instrucoes
 }
 
 if (condicao){
     bloco de isntrucoes
 } else {
     bloco de instrucoes
 }

 if(condicao) {
     bloco de isntrucoes
 } else if  ( codicao 2) {
     bloco de instrucoes
} else {
    bloco de instrucoes
}

DICAS
1. Condicao e sempre um valor booleado
2. E possivel ultilizar uma variavel na condicao
3. E possivel xpressar a condicao na hora
que esta escrevendo-a Ex: a > b
4. O uso do else e ocional no IF
5. Voce precisa usar else if quando que representar
3 ou mais situacoes2
*/
// EXEMPLOS DE IF
// IF SIMPLES:
if (idade >18 ){
    console.log("Usuario e maior de idade")
} 
// IF com else
var nome = "goku"

if (nome != "goku") {
    console.log ("Nao e o goku")
}else{
console.log ("E o goku!")
}
// IF com ELSE IF
var formaPagamento = "dinheiro"

if (formaPagamento  === "dinheiro"){
   console.log('pagou em dinheiro')
} else if (formaPagamento === "cartao"){
    console.log ("pagou no cartao")
}else if (formaPagamento === "cheque") {
    console.log ("pagou no cheque")
}
// IF com DUAS CONDICOES
var numero = 7;
if(numero > 0 || numero < 0){
    console.log ("Nao e zero")
} else {
    console.log ("O numero e zero")
}