// Objetos


//Exemplo1:

// let diasDaSemana = {
//     1: 'domingo',
//     2: 'segunda',
//     3: 'terça',
//     4: 'quarta',
//     5: 'quinta',
//     6: 'sexta',
//     7: 'sábado',
// };

// console.log(diasDaSemana['1']);


//Exemplo2:

// let moradores = [
//     {
//       nome: 'Luiza',
//       sobrenome: 'Guimarães',
//       andar: 10,
//       apartamento: 1005,
//     },
//     {
//       nome: 'William',
//       sobrenome: 'Albuquerque',
//       andar: 5,
//       apartamento: 502,
//     },
//     {
//       nome: 'Murilo',
//       sobrenome: 'Ferraz',
//       andar: 8,
//       apartamento: 804,
//     },
//     {
//       nome: 'Zoey',
//       sobrenome: 'Brooks',
//       andar: 1,
//       apartamento: 101,
//     },
//   ];

//   let primeiroMorador = moradores[0];
//   console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
//   console.log(primeiroMorador['andar']); // 10

//   let ultimoMorador = moradores[moradores.length - 1];
//   console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
//   console.log(ultimoMorador.nome); // Zoey

// let player = {
//     nome :'Marta',
//     lastName : 'Averardo',
//     age : 34,
//     medals : {
//         golden:2, silver:3
//     }

// };

// console.log('A jogadora '+ player.nome+ ' '+player.lastName+' tem '+player.age+ " anos de idade.");

// player['bestInTheWorld'] = [2006,2007,2008,2009, 2010, 2018];

// console.log('A jogadora '+ player.nome+ ' '+player.lastName+' foi eleita a melhor do mundo por 6 vezes: '+player.bestInTheWorld);

// console.log('A jogadora possui '+player.medals.golden+' medalhas de ouro e '+player.medals.silver+' medalhas de prata.')


//for/in for/of


//pedidos de pizza

// let pizzas = {
//     sabor: 'Palmito',
//     preco: 39.90,
//     bordaCatuipiry: true
// };

// for (let key in pizzas){
//     console.log(key);
// }

// for (let key in pizzas){
//     console.log(pizzas[key]);
// }

// let pizzasDoces = ['chocolate', 'banana','morango'];

// for(let key in pizzasDoces){
//     console.log(key, pizzasDoces[key]);
// }



// Usando o objeto abaixo, utilize for/in e imprima no console a mensagem
// 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.


// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

//   for(let key in names){
//     console.log('Olá '+names[key]);
//   }

//Usando o objeto abaixo, utilize for/in e imprima um console.log
//com as chaves e valores desse objeto.

// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

//   for(let value in car){
//     console.log(value, car[value]);
//   }


// const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//   console.log(property + ' = ' + object[property]);
// }

// function sum(a, b) {
//     return a + b;
//   }
//   console.log(sum(1, 2));




// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

  // Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.

//   console.log('Bem-vinda, '+ info.personagem);

//           ****Importante****
// Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

// info['recorrente']= 'Sim';

// for (let x in info){
//     console.log(x + ': ' ,info[x]);
// }

// Faça um for/in que mostre todas as chaves do objeto.

// for (let x in info){
//     console.log(x);
// }

// Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.

// for(let x in info){
//     console.log(info[x]);
// }


// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro
// e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain,
// Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'.
// Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

// let info2 = {
// nome: 'Tio Patinhas',
// origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
// nota: 'O último MacPatinhas',
// recorrente: 'Sim'

// };

// console.log(info.personagem + ' e ', info2.nome);
// console.log(info.origem + ' e ',info2.origem);
// console.log(info.nota + ' e ', info2.nota);
// if(info.recorrente === info2.recorrente){
//     console.log('Ambos recorrentes');
// }

// Usando o objeto abaixo, faça os exercícios a seguir:

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos:

//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },

//   };

//   Acesse as chaves nome, sobrenome e titulo,
//   que está dentro da chave livrosFavoritos, e
//   faça um console.log no seguinte formato:
//   "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

// console.log('O livro favorito de '+leitor.nome+' '+leitor.sobrenome+' se chama '+leitor.livrosFavoritos.titulo);


//Adicione um novo livro favorito na chave livrosFavoritos, que é um array.
//Atribua a esta chave um objeto contendo as seguintes informações:

// leitor.livrosFavoritos[0] =  {
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
//   }

//   Object.assign({}, livrosFavoritos, livrosFavoritos2);

//   for(let x in leitor){
//     console.log(leitor[x]);
//   }

//   var size = Object.keys(leitor.livrosFavoritos).length;

//  console.log(leitor.nome+' tem '+ size+' livros favoritos.')

// Nao consegui resolver.


// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.


// function ehpalindromo (palavra){

//     var palavrarev = palavra.split('').reverse().join('');

//   return palavrarev===palavra;

// }

// console.log(ehpalindromo("arara"));


// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// var arr = [2, 3, 6, 7, 10, 1];

// function maiorNumero(array){
// let maior =0;
//     for(let i=0; i<array.length; i+=1){
//         if(array[i]>maior){
//             maior = i;
//         }
//           }
//           return maior;
//         }

// console.log(maiorNumero(arr));

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// var arr = [2, 4, 6, 7, 10, 0, -3];

// function menorNum(array){
// let menor=0;
// for(i=0;i,i<array.length; i+=1){
//     if(array[i]<menor){
//         menor=i;
//     }
// }
// return menor;
// }

// console.log(menorNum(arr));

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// var arr = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

// function maiorNome(array){
    
//     const result = array.sort((a,b) => b.length - a.length)[0];
//     return result;
// }
// console.log(maiorNome(arr));


// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// var arr =[2, 3, 2, 5, 8, 2, 3];

// function maisRep(string){
//    var hashmap = string.reduce((a,b) => {a[b] = (a[b] || 0)+1 
//     return a}
// ,{}) 
//     return Object.keys(hashmap).reduce((a,b) => hashmap[a]>hashmap[b] ? a:b)
// }
// console.log(maisRep(arr));

//Crie uma função que receba um número natural (número inteiro não negativo) N 
//e retorne o somatório de todos os números de 1 até N.

// function somaNat(num){
//     let soma=0;
//     let soma2=0;
//     for(let i=0; i<num; i+=1){
//        soma+=1;
//        soma2+=soma;
//     }
//     return soma2;
// }

// console.log(somaNat(5));

//Crie uma função que receba uma string word e outra string ending. 
//Verifique se a string ending é o final da string word. Considere que 
//a string ending sempre será menor que a string word.

// function verificaPalavra(teste, teste2){
//    let bla = teste.slice(-teste2.length);
//     return bla === teste2;
// }
// console.log(verificaPalavra('trybe','be'));



// A partir do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave 
// e a quantidade de vezes que ela aparece no array como valor. 
// Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], 
// deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.


// var basket = ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'];

// function retornaFrutas(array) {
//     var Hashmap = array.reduce((a,b)=>{a[b]=(a[b] || 0)+1
//         return a
//         },{})
//         return Hashmap;
// }
// // console.log(retornaFrutas(basket));

// let rbasket = retornaFrutas(basket);

// console.log("Sua cesta possui: "+rbasket.Melancia+" Melancias, "+rbasket.Abacate+" Abacates e "+rbasket.Uva+" Uvas.");























