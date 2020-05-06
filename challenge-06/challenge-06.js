/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/

var championship = 'Campeonato Estadual';
console.log( championship );

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Palmeiras', 'Curitiba', 'Santos', 'Corinthians', 'São Bento'];
console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/

function showTeamPosition( position ) {
  if( position < 1 || position > 5 ) {
    return 'Não temos a informação do time que está nessa posição.';
  }
  return 'O time que está em ' + position + 'º lugar é o ' + teams[ position - 1 ] + '.';
};

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/

console.log ( showTeamPosition ( 0 ) );
console.log ( showTeamPosition ( 1 ) );
console.log ( showTeamPosition ( 2 ) );
console.log ( showTeamPosition ( 8 ) );

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/

var num = 20;

while( num <= 30 ) {
  console.log ( num ++ );
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/

var color = ['vermelho', 'azul', 'amarelo', 'roxo', 'rosa'];

function convertToHex ( color ) {
   switch( color ) {
     case 'vermelho':
       return 'O hexadecimal para a cor' + color + ' ' + ' é #ff0000';
     case 'amarelo':
       return 'O hexadecimal para a cor' + color + ' ' + ' é #ffff00';
     case 'azul':
       return 'O hexadecimal para a cor' + color + ' ' + ' é #0000ff';
     case 'rosa':
       return 'O hexadecimal para a cor' + color + ' ' + ' é #ff007f';
     default:
       return 'Não temos o equivalente para a cor ' + color;
       }
   }

function convertToHex ( color ) {
   switch( color ) {
     case 'vermelho':
       hexa = '#ff0000';
       break;
     case 'amarelo':
       hexa = '#ffff00';
       break;
     case 'azul':
       hexa = '#0000ff';
       break;
     case 'rosa':
       hexa = '#ff007f';
       break;
     default:
        return 'Não temos o equivalente para a cor ' + color;
       }
       return 'O hexadecimal para a cor ' + color + ' é ' + hexa + '.';
   }

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/

convertToHex( 'verde' );
console.log( convertToHex( 'verde' ) );
// 'Não temos o equivalente para a cor verde'

convertToHex( color[0] );
console.log( convertToHex( color[0] ) );
console.log( convertToHex( 'vermelho' ) );
// 'O hexadecimal para a cor vermelho é #ff0000'

convertToHex( color[1] );
console.log( convertToHex( color[1] ) );
console.log( convertToHex( 'azul' ) );
// 'O hexadecimal para a cor azul é #0000ff'

convertToHex ( color[2] );
console.log( convertToHex( color[2] ) );
console.log( convertToHex( 'amarelo' ) );
// 'O hexadecimal para a cor amarelo é #ffff00'

convertToHex ( color[3] );
console.log( convertToHex( color[3] ) );
console.log( convertToHex( 'roxo' ) );
// 'Não temos o equivalente para a cor roxo'

convertToHex ( color[4] );
console.log( convertToHex( color[4] ) );
console.log( convertToHex( 'rosa' ) );
// 'O haxadecimal para a cor rosa é #ff007f'

convertToHex ( 'laranja' );
console.log( convertToHex( 'laranja' ) );
// 'Não temos o equivalente para a cor laranja'

convertToHex ( 'branca' );
console.log( convertToHex( 'branca' ) );
// 'Não temos o equivalente para a cor branca'



