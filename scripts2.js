//let pizzas=['queijo', 'frango', 'palmito', 'marguerita', 'chocolate'];

//pizzas.push('calabresa', 'pepperoni', 'abacaxi');

// for(let index=0; index<pizzas.length; index+=1){
//     console.log(pizzas[index])
// }

//let tarefas=['estudar', 'gravar set', 'dormir'];

//let search=tarefas[0];

//console.log(search);

// let searchlast = tarefas[tarefas.length -1];

// console.log(searchlast);

// tarefas.unshift('estudar muito');

// tarefas.pop();

// console.log(tarefas);


//  let menu = ['home', 'servicos', 'portfolio', 'contato'];
//  let menus;

// // menus = menu[1];
// // menus=menu.indexOf('portfolio');
// // menu.push('links');

// console.log(menu);

//  let numero = 5;

//  for(let x=1; x<=9; x+=1){
//     console.log(numero*x);
//  }

// var lista = ['bruno', 'henrique', 'francisco', 'ieda'];

// for(var indice=0; indice<lista.length; indice +=1){
//     var mensagem = "bem vindo:" + lista[indice] + "!!";
//     console.log(mensagem);
// }

// let grocery=['banana', 'feijao', 'leite', 'farinha', 'acucar'];

// for(var indice=0; indice<grocery.length; indice+=1){
//     var mensagem = ".: " + grocery[indice];
//     console.log(mensagem);
// }


// let numeros = [1,2,3,4,5];
// for(let numero of numeros) {
//   console.log(numero);
// }

// let word='hello yall';
// for(let letters of word){
//     console.log(letters);
// }

// let nomes=['bruno', 'henrique', 'francisco'];
// for(let org of nomes){
//     console.log(org);
// }

// function dice () { 
//     return Math.ceil(Math.random() * 6);
// }
// let d1 = dice();
// let d2 = dice();
// while (d1 === d2) {
//     d2 = dice();
// }




///// Lista de exercícios /////


// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// var soma = 0;
// var maior =0;
// var i2=0;
// var menor=0;
// let menores = [];

//1 Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

// for(let ppp of numbers){
//     console.log(ppp);
// }

// for(let indice = 0; indice<numbers.length; indice+=1){
//     console.log(numbers[indice]);
// }

//2 Para o segundo exercício, some todos os valores contidos no array e imprima o resultado; 278

// for(var indice = 0; indice<numbers.length; indice +=1){
//     soma+=numbers[indice];
// }
// console.log(soma);

//3 Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

// for(var indice=0; indice< numbers.length; indice+=1){
//     soma+=numbers[indice];
// }
// console.log(soma/numbers.length);

// 4 Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20".
//   Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// for(var indice=0; indice< numbers.length; indice+=1){
//         soma+=numbers[indice];
//     }
//     if(soma/numbers.length>= 20){
//       console.log("Valor maior que vinte.")
//     }

//5 Utilizando for, descubra qual o maior valor contido no array e imprima-o; ******************

// for( var i=0; i<numbers.length; i+=1){
//     if (numbers[i] > maior){
//         maior = numbers[i]
//     }
//     }
// console.log(maior);

// 6 Descubra quantos valores ímpares existem no array e imprima o resultado. 
// Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// for(var i=0; i<numbers.length; i+=1){
//   if(numbers[i]%2 !== 0){
//     i2+=1;
//   }
// }
// console.log("Quantidade de números ímpares igual a : " + i2);

// 7 Utilizando for, descubra qual o menor valor contido no array e imprima-o;

// for(var i=0; i<numbers.length; i+=1){
//     if(numbers[i]<numbers[i+1]){
//         menor=numbers[i];
//     }
// }
// console.log(menor);

// 8 Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

// for(var i=0; i<=25; i+=1){
// console.log(i);
// }

// 9 Utilizando o array criado no exercício anterior imprima o resultado da divisão
// de cada um dos elementos por 2.

// for(var i=0; i<=25; i+=1){
// console.log(i/2);
//  }

// bonus


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 Ordene o array numbers em ordem crescente e imprima seus valores;

// let posicao;

// for (let i = 0; i < numbers.length - 1; i += 1) {
//     for (let i2 = i; i2 < numbers.length; i2 += 1) {
//         if (numbers[i] > numbers[i2]) {
//             posicao = numbers[i2];
//             numbers[i2] = numbers[i];
//             numbers[i] = posicao;
//         }

//     }
//     console.log(posicao);
// } Nao funcionou 100%

// const len = numbers.length;

// for(let i=0; i<len; i+=1){
//     for(let j=0; j<len -i - 1 ; j+=1){
//         if(numbers[j] > numbers[j+1]){
//             const temp = numbers[j];
//             numbers[j]=numbers[j+1];
//             numbers[j+1] = temp;
//         }
//     }

// }
// console.log(numbers); 

//Funcionou!

// Agora crie um novo array a partir do array numbers, sem perdê - lo.
// Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte.
// Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5(primeiro valor) e 9(valor seguinte).
// Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9(segundo valor) e 3(valor seguinte), 
// e assim por diante.Caso não haja próximo valor, a multiplicação deverá ser feita por 2. 
// Faça isso utilizando o for e o método push.O resultado deve ser o array abaixo:
// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

let numbers2 = [];
ultimo = numbers[numbers.length - 1];

for (let i = 0; i < numbers.length; i += 1) {
    for (let i2 = i; i2 < numbers.at(1); i2 += 1) {
        numbers2.push(numbers[i2] * numbers[i2 + 1]);
        break;
    }
}
console.log(numbers2 + ',' + ultimo * 2);



























