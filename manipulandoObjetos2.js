const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};
const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};
const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

//   1. Crie uma função para adicionar o turno da noite na lesson2. 
//   Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado,
// a chave que deverá ser adicionada e o valor dela.

const addTurno = () => {
    const chave = "turno";
    let valor = "noite";
    lesson2[chave] = valor;
}
addTurno();
console.log(lesson2);

console.log(`-------------------------
`);

// 2. Crie uma função para listar as keys de um objeto. 
// Essa função deve receber um objeto como parâmetro.

const listKeys = (obj) => {
    console.log(Object.keys(obj));
}
listKeys(lesson1);

console.log(`-------------------------
`);

// 3. Crie uma funcao para mostrar o tamanho de um objeto. Essa funcao 
// deve receber um objeto como parametro.

const objSize = (obj) => {
    console.log(Object.keys(obj).length + Object.values(obj).length);
}
objSize(lesson3);

console.log(`-------------------------
`);

// 4. Crie uma função para listar os valores de um objeto. 
// Essa função deve receber um objeto como parâmetro.

const listValues = (obj) => {
    console.log(Object.values(obj));
}
listValues(lesson2);

console.log(`-------------------------
`);

// 5. Crie um objeto de nome allLessons, que deve agrupar todas as aulas através
// do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves:
// lesson1, lesson2 e lesson3.

// const allLessons = Object.assign({}, lesson3, lesson2, lesson1);
// console.log(allLessons);

const allLessons = { lesson1, lesson2, lesson3 };
console.log(allLessons);

console.log(`-------------------------
`);

// 6. Usando o objeto criado no exercício 5, crie uma 
// função que retorne o número total de estudantes
// em todas as aulas.

//const array = Object.entries(allLessons);
//console.log(array);

//let sum=0;

// allLessons.forEach(elemento =>{

// //sum+=elemento.numeroEstudantes;
// console.log(typeof elemento.numeroEstudantes)
// });

// console.log(sum);

const somaAlunos = (obj) => {
    let a = obj.lesson1.numeroEstudantes;
    let b = obj.lesson2.numeroEstudantes;
    let c = obj.lesson3.numeroEstudantes;
    let d = a + b + c;
    console.log(`número de horas: ${d}.`);

}
somaAlunos(allLessons);

console.log(`-------------------------
`);

// 7. Crie uma função que obtenha o valor da chave de
// acordo com o seu índice no objeto.

const searchIndex = (obj, index) => {
    console.log(Object.values(obj)[index]);
}
searchIndex(lesson1, 0);

console.log(`-------------------------
`);

// 8. Crie uma função que verifique se o par (chave / valor) existe na função. 
// Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da
// chave e o valor da chave.

const checkObject = (obj, key, valor) =>{

const valores = Object.values(obj);
const chaves = Object.keys(obj);
let contador=0;
for(let i=0; i<valores.length; i+=1){
    if(valores[i] === valor){
        contador+=1;
    }
}
for(let i=0; i<chaves.length; i+=1){
    if(chaves[i] === key){
        contador +=1;
    }
}
if(contador === 2){
    console.log(true);
}
else{
    console.log(false);
}
}
checkObject(lesson3,'turno','noite');

console.log(`-------------------------
`);
