// AULA 2 - CSS Externo, Sistema de Cores, Encoding e Caractere
//de Escape
/* 
HTML
HTML e uma imensidao
 Nao e uma boa ficarmos explorando uma a uma as tags HTML na 
 nossa aula. Precisamos antes de mais nada ter uma boa referecia 
 onde consultar essas tags.

 w3shools.com

 INDO UM POUCO ALEM
 Alem do rico conhecimento de tags, existem mais alguns 
 conhecimentos que soa inportantes:
  - Encondig da Pagina
  - Caractere de escaoe
  - Sistema de Cores

ENCONDING
O computador nao enxerga letras ou frases, ele so entende 
numeros 0 e 1, com isso criamos dicionarios que dizem para o 
computador que o numero "x" representa determinada letra
neste dicionario.

Esses dicionarios no fim sao chamados de encongid e e 
com isso que nossos programas conseguem se virar com quais 
caracteres vao ser apresentado em determinada pagina/ documento

ENCONDING E UM MUNDO QUE ASSUTA
Pouco padronizado, acompanhou o desenvolvimento historico
dos computadores. Nao vamos entrar profundamente no assunto 
encondig no nosso curso. 
Principais encondings que fevemos cochecer (parareferencia):
 ASCII - 7 bits, 128 caracteres
 Unicode - UTF-* (Unicode Tranformation Format) - 256 caracteres

 COMO APLICAR NO HTML?
 Para aplicar o enconding correto a sua pagina HMTL, preicsamos
 adicionar uma tag bem simples ao nosso documento. Por padrao,
 utilizaremos o Unicode UTF-8

*/

<meta charset="utf-8"/>
/*
Isso deve ser a primeira coisa no seu cabecalho HEAD. Caso
fique no fim, o browser precisara reinterpretar toda a sua pagina

CARACTERE DE ESCAPE
Como eu escrevo a expressao "<h1>" no corpo da minha pagina HTML
sem que o browser confunda esse texto com uma TAG?

Se queremos exibir um caractere especial da nossa linguagem
para o usuario final vamos recorrer ao caractere de escape
*/
<html> 
    Este e um &at;h1&gt;
</html>
/*
SISTEMA DE CORES
No HTML as cores podem ser nomeadas pelo nome (em Ingles), 
como while para branco, green para verde, blue para vermelho
e assim por diante.
 Podem ser codificadas por numeros hexadecimais, como, FFAA00
 -1,2,3,4,5,6,7,8,9,a,b,c,d,e,f.
 Os codigos sao como uma mistura de cores RGB
 (Red - Vermelho, Green - Verde, Blue -Azul).

CSS

O QUE VAMOS APREENDER?
- O que e CSS
- Como criamos e adicionamos codigo CSS na nossa Pagina
- Principais propriedades e valores
- Um ponco do univeso e como se aprofundar nele
(links, videos, comentarios e etc)

O QUE E CSS?
A linguagem Cascading Style Sheet, chamada de CSS, e usada
para estilizar elementos escritos em uma linguagem de marcacao
como HTML. O CSS separa o conteudo da representacao visual 
do site.  Altera a cor do testo e do fundo, a fonte e o
espacamento entre paragrafos, como exemplo.
 Tambem e possivel estilizar tableas, ajustar miagens para
 as suas respectivas telas, etc.

 SINTAXE BASICA
A sintaxe basica de codigo CSS pode ser resumida nas seguintes
partes:
*/
selector{
    propriedade1: valor(es) 1;
    propriedade2: valor (es)2
}
/*
SINTAXE BASICA -SELETORES
Seletor vai indicar quais tags do nosso documento HTML
receberao aquela formatacao

SINTAXE BASICA - SELETORES
Voce pode indicar quias itens receberao o estilo
atraves de tres estrategias principais:

DIRETAMENTE NO NOME DA TAG: Voce pode definir tags 
especificas para receberem a formatacao.

Exemplo:
h1 >>> tods as tags h1 receberao a formatacao indicada entre 
as chaves

ATRAVES DA CLASSE: Voce pode determinar a classe dos elementos 
que receberao a formatacao. Isso permite, por exempl, que alguns
elementos h1 recebam a formatacao e outros, nao.
As classes sao precedidas por um. (ponto)

Exemplo:
.navbar -> todas as tags tem atributos class ="navbar"
receberao a alteracao.
h1, navbar _> todas as tags h1 que tem o tributo class
="navbar" receberao a alteracao.
h1.navbar -> todas as tags h1 que tem o atributo 
class="navbar" receberao a alteracao.

SINTAXE BASICA - SELETORES
ATRAVES DO ID: Assim como usamos o atributo class, podemos
utilizar o atributo "id". Diferentes das classes, neste caso
voce usa o simbulo de #

Exemplo:
#container -> todas as tags que tem o atributo id="container"
receberao a alteracao
div#container _> todas as divs que tem o atributo id ="container"
receberao a alteracao.

SINTAXE BASICA - PROPRIEDADE

*/
selector {
    propriedade1: valor (es)1;
    propriedade2: valor (es)2
}
/*
PROPRIEDADE; E a propriedade da tag que gostariamos de 
alterar . Ha uma referencia linkada aqui com todas as
propriedades comtempladas pelo CSS#, que estamos estudando.

Eemplo: margin, color, background-image, font-style, font-weight

SINTAXE BASICA - VALORES */
selector {
   propriedade1: valor(es)1;
   propriedade2: valor(es)2
}
/*
VALOR: Cada propriedade tem um conjunto de valores que ela 
pode assumir, Voce presica consultar a referencia para saber
que valores sao esses. Alguns exemplos de valores mais comum sao:

COMO COLOCAR CSS NA NOSSA PAGINA?
 Existem 3 principais maneiras para colocar CSS na nossa 
 pagina HTML:
 - Atributo style dentro das tags HTML
 - Tag <style></style>
 - Puxando um document css externo atraves da tag <link>
 */
<link rel ="stylesheet" type="text/class" href="css/style.css"/>