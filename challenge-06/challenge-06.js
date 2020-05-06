/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/

var championship = 'Campeonato Estadual';
console.log(championship);

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

function showTeamPosition( numero ) {
  switch( numero) {
    case 1: 
      console.log('O time que está em ' + numero + ' ' + ' lugar é o ' + teams + '.');
    break;
    default:
      console.log('Não temos a informação do time que está nessa posição.');
  }
};

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log ( arrayFunction( numero, 0 ) );
console.log ( arrayFunction( numero, 1 ) );
console.log ( arrayFunction( numero, 2 ) );
console.log ( arrayFunction( numero, 3 ) );

function addChampionship( numero ) {
  return teams = ['UEFA Championship'][5];
}

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/

var num = 25;

while( num > 19 && num <= 30) {
  console.log ( num );
  num++;
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

var cor = ['vermelho', 'azul', 'amarelo', 'roxo', 'rosa'];

function convertToHex ( cor ) {
   switch( cor ) {
     case 1:
       cor[0] = 'vermelho';
       console.log('O hexadecimal para a cor ' + cor + ' ' + ' é #ff0000');
     break;
     case 2:
       cor[2] = 'amarelo';
       console.log('O haxadecimal para a cor ' + cor + ' ' + ' é #ffff00');
     break;
     case 3:
       cor[1] = 'azul';
       console.log('O haxadecimal para a cor ' + cor + ' ' + ' é #0000ff');
     break;
     case 5:
       cor[4] = 'rosa';
       console.log('O haxadecimal para a cor ' + cor + ' ' + ' é #ff007f');
     break;
     default:
       console.log('Não temos o equivalente para a cor ' + cor);
       }
   }

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/

convertToHex( 'verde' );
// Não temos o equivalente para a cor verde

convertToHex( cor[0] );
// O hexadecimal para a cor vermelho é #ff0000

convertToHex( cor[1] );
// O hexadecimal para a cor vermelho é #0000ff

convertToHex ( cor[2] );
// O hexadecimal para a cor amarela é #ffff00

convertToHex ( cor[3] );
// Não temos o equivalente para a cor roxo

convertToHex ( cor[4] );
// O hexadecimal para a cor amarela é #ff007f

convertToHex ( 'laranja' );
// Não temos o equivalente para a cor laranja

convertToHex ( 'branca' );
// Não temos o equivalente para a cor branca



