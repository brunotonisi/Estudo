function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

//   //Exercício 1:
// Crie um calendário dinamicamente.
// O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
// Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.
// A tag <ul> deve conter o id 'days';
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let dias = document.querySelector("#days");

for (let i = 0; i < decemberDaysList.length; i += 1) {
    let diasMes = document.createElement("li");
    diasMes.className = "day";
    diasMes.innerText = decemberDaysList[i];
    dias.appendChild(diasMes);
}

for (let i = 0; i < decemberDaysList.length; i += 1) {
    let friday = document.getElementsByClassName("day")[i];
    if (i == 5 || i == 12 || i == 19 || i == 26) {
        friday.className += " friday";
    }
}

for (let i = 0; i < decemberDaysList.length; i += 1) {
    let holiday = document.getElementsByClassName("day")[i];
    if (i == 25 || i == 26 || i == 32) {
        holiday.className += " holiday";
    }
}

//Exercício 2:
// Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
// Sua função deve receber um parâmetro com a string 'Feriados'
// Adicione a este botão a ID "btn-holiday"
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container"

chamaBtn = document.querySelector(".buttons-container");


function criaBotao() {
    var btn = document.createElement("button");

    btn.id = "btn-holiday";
    btn.innerText = "Feriados";
    chamaBtn.appendChild(btn);
    btn.onClick = function () {
        window.history.go(0);
    }

}

criaBotao();

// Exercício 3:
// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor "rgb(238,238,238)".

var troca = document.querySelectorAll(".holiday");
let j = 0;
function mudaCor() {
    j++;
    if (j == 1) {
        for (let i = 0; i < troca.length; i += 1) {
            troca[i].style.backgroundColor = "#c4a35a";
        }
    }
    if (j > 1) {
        for (let i = 0; i < troca.length; i += 1) {
            troca[i].style.backgroundColor = "#e5e5dc";
        }
        j = 0;
    }
}
const botaoCor = document.getElementById("btn-holiday");
botaoCor.addEventListener('click', mudaCor);

//Exercício 4:
// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". 
//Sua função deve receber como parâmetro a string "Sexta-feira".
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

function criaBotaoSexta() {
    var btn = document.createElement("button");
    btn.innerText = "Sexta-Feira";
    btn.id = "btn-friday";
    chamaBtn.appendChild(btn);
    btn.onClick = function () {
        window.history.go(0);
    }
}
criaBotaoSexta();

// Exercício 5:
// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. 
// Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido
//  nos dias que são sextas-feiras.
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, 
// ele retorna à configuração inicial exibindo os dias.

var pegaSexta = document.getElementsByClassName("friday");
var k = 0;
function mudaTexto() {
    k++;
    if (k == 1) {
        for (let i = 0; i < pegaSexta.length; i += 1) {
            pegaSexta[i].innerText = "Sextou!";
        }
    }
    if (k > 1) {
        for (let i = 0; i < pegaSexta.length; i += 1) {
            pegaSexta[0].innerText = "4";
            pegaSexta[1].innerText = "11";
            pegaSexta[2].innerText = "18";
            pegaSexta[3].innerText = "25";

        } k = 0;

    }
}

var botaoSexta = document.querySelector("#btn-friday");

botaoSexta.addEventListener('click', mudaTexto);

// Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". 
// Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar 
// e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target.

function passaMouse(e) {
    e.target.style.transform = "scale(2)";
    //e.target.style.color = "#c66b3d";
}

function tiraMouse(e) {
    e.target.style.transform = "scale(1)";
    //e.target.style.color = "#777";
}

for (let i = 0; i < decemberDaysList.length; i += 1) {
    var diasDoMes = document.getElementsByClassName("day")[i];
    diasDoMes.addEventListener('mouseover', passaMouse);
    diasDoMes.addEventListener('mouseout', tiraMouse);
}

// Exercício 7:
// Implemente uma função que adicione uma tarefa personalizada ao calendário. 
// A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") 
// e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

let div = document.getElementsByClassName("my-tasks")[0];
function tarefaPersonalizada() {
    let elemento = document.createElement('span');
    elemento.innerText = "Estudar: ";
    div.appendChild(elemento);
}

tarefaPersonalizada();

// Exercício 8:
// Implemente uma função que adicione uma legenda com cor para a tarefa.
// Copiar
// * Essa função deverá receber como parâmetro uma string ('cor') e criar dinamicamente
// um elemento de tag `<div>` com a classe `task`.
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

let puxaDiv = document.getElementsByClassName("my-tasks")[0];
function addLegenda() {
    let div = document.createElement("div");
    //div.innerText = "Azul";
    div.className = "task";
    div.style.backgroundColor = "#26495c";
    puxaDiv.appendChild(div);
}

addLegenda();

// Exercício 9:
// Implemente uma função que selecione uma tarefa.
// Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa,
//  atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe
// task selected ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, 
// essa tarefa está deixando de ser uma tarefa selecionada.
let x = 0;
function selecionaTarefa(p) {
    x += 1;
    if (x == 1) {
        p.target.className = "task-selected";
    }
    if (x > 1) {
        p.target.className = "task";
        x = 0;
    }
}

let divclass = document.getElementsByClassName("task")[0];
divclass.addEventListener('click', selecionaTarefa);

// Exercício 10:
// Implemente uma função que atribua a cor da tarefa ao dia do calendário.
// Adicione um evento que, ao clicar em um dia do mês no calendário, 
// atribua a esse dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119)
let variavel = 0;
function atribuiTarefa(p) {
    variavel += 1;
    if (variavel == 1) {
        p.target.style.color = "#26495c"
    }
    if (variavel > 1) {
        p.target.style.color = "rgb(119,119,119)";
        variavel = 0;
    }
}


for (let i = 0; i < decemberDaysList.length; i += 1) {
    let pegaDia = document.getElementsByClassName("day")[i];
    pegaDia.addEventListener('click', atribuiTarefa);
}

// Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", 
// adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input, a função deve retornar um 
// alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.
// Dica - Propriedade: key.

let puxaLista = document.getElementsByClassName("task-list");
let puxaInput = document.getElementById("task-input");
function addCompromisso() {
    for (let i = 0; i < puxaLista.length; i += 1) {
        let compromisso = document.createElement("li");
        compromisso.innerText = puxaInput.value;
        puxaLista[i].appendChild(compromisso);

    }
}

let adiciona = document.getElementById("btn-add");
adiciona.addEventListener('click', addCompromisso);




