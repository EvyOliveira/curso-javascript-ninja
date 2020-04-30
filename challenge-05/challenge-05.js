/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var arr = [0, 1, 2, 3, 4, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function myFunction(arr) {
  return arr;
};
  
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

myFunction(arr)[2]      // 2

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
var numero = 6;
var arr = [0, 1, 2, 3, 4, 5];

function myFunction(arr, numero) {
   return arr[0], numero;
};

myFunction(arr, numero);      // [ 0, 6 ]

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var list = [ 'evelyn', 1, false, 20, null ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
function myFunction(list) {
  return list;
};

myFunction(list);     // [ 'evelyn', 1, false, 20, null ]

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

 function book( name1, name2, name3 ) {
     var obj = {
      name1: { quantPag: 100, autor: 'Shakespeare', editora: 'Livraria Cultura'},
      name2: { quantPag: 200, autor: 'Olavo de Carvalho', editora: 'Editora Três'},
      nome3: { quantPag: 300, autor: 'Evelyn Oliveira', editora: 'Editora Quadrante'},
     };
      return obj;
   }

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

book()

/* {
  name1: { quantPag: 100, autor: 'Shakespeare', editora: 'Livraria Cultura' },
  name2: {
    quantPag: 200,
    autor: 'Olavo de Carvalho',
    editora: 'Editora Três'
  },
  nome3: {
    quantPag: 300,
    autor: 'Evelyn Oliveira',
    editora: 'Editora Quadrante'
  }
} */

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

book.quantPaginas = function() {
   return 'O livro ' + book(name1, name2, name3) + ' ' + ' tem ' + obj(quantPag) + ' páginas! ';
}

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

book.autorLivro = function() {
   return 'O autor do livro ' + book(name1, name2, name3) + ' ' + ' é ' + obj(autor);
}

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

book.editoraLivro = function() {
   return 'O livro ' + book(name1, name2, name3) + ' ' + ' foi publicado pela editora ' + obj(editora);
}


