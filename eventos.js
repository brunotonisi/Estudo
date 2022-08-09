const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


function resetText(event) {
    // O Event é passado como um parâmetro para a função.
    event.target.innerText = 'Opção reiniciada';
    // O event possui várias propriedades, porém a mais usada é o event.target,
    // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);
secondLi.addEventListener('dblclick', resetText);
thirdLi.addEventListener('dblclick', resetText);

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso? 

function adicionaClasse(event) {
    const currentTech = document.querySelector(".tech");
    if (currentTech) {
        currentTech.classList.remove("tech");
    }
    event.target.className = "tech";
}

firstLi.addEventListener('click', adicionaClasse);
secondLi.addEventListener('click', adicionaClasse);
thirdLi.addEventListener('click', adicionaClasse);



// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';



function adicionaTexto() {
    let pegaClasse = document.querySelector(".tech");
    if(pegaClasse){
        pegaClasse.innerText=input.value;
    }
}

input.addEventListener('keyup', adicionaTexto);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

function redirecionaAudio(){
    window.open("https://www.youtube.com/watch?v=UKY87AGoY88&t=3697s");
}
myWebpage.addEventListener('dblclick', redirecionaAudio);


// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

function mudaCor(){
    let top3 = document.querySelector("#my-spotrybefy");
   top3.style.color="green";
}
myWebpage.addEventListener('mouseover', mudaCor);