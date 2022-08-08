//1 🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
let paiBody = document.body;
let novoTexto = document.createElement("h1");
novoTexto.id = "novoTexto";
var texto = document.createTextNode("Exercício - Javascript DOM");
novoTexto.appendChild(texto);
paiBody.appendChild(novoTexto);

//2 🚀 Adicione a tag main com a classe main-content como filho da tag body;
let addMain = document.createElement("main");
let addMC = document.createElement("class");
addMC.className = "main-content";
addMain.appendChild(addMC);
paiBody.appendChild(addMain);

//3 🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let addSection = document.createElement("section");
addSection.className = "section-content";
let addCC = document.createElement("class");
addCC.className = "center-content";
addSection.appendChild(addCC);
addMain.appendChild(addSection);

//4 🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let parag1 = document.createElement("p");
let para1Texto = document.createTextNode("Lorem Ipsum.");
parag1.appendChild(para1Texto);
addSection.appendChild(parag1);

//5 🚀 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let addSection2 = document.createElement("section");
let addClass = document.createElement("class");
addClass.className = "main-class";
addSection2.appendChild(addClass);
addMain.appendChild(addSection2);

//6 🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let addSection3 = document.createElement("section");
addSection3.className="section6";
let addClass2 = document.createElement("class");
addClass2.className = "right-content";
addSection3.appendChild(addClass2);
addMain.append(addSection3);

//7 🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. 
//Esse elemento deve ser filho do section criado no passo 5;

let img1 = document.createElement("img");
img1.src = "https://picsum.photos/200";
img1.className = "small-image";
addSection2.appendChild(img1);

//8 🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... 
//como valores da lista. Essa lista deve ser filha do section criado no passo 6;

let listaNO = document.createElement("ul");
listaNO.className = "numeros";

addSection3.appendChild(listaNO);

let itens = [
    'um',
    'dois',
    'tres',
    'quatro',
    'cinco',
    'seis',
    'sete',
    'oito',
    'nove',
    'dez'
];

for(let i=0; i<itens.length;i+=1){
    let listar = document.createElement("li");
    listar.innerText = itens[i];
    listar.className = "li";
    listaNO.appendChild(listar);
}

//9 🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
//11 🚀 Adicione a classe description nas 3 tags h3 criadas;

for(let i=0; i<=2; i+=1){
    let criaH3 = document.createElement("h3");
    criaH3.className = "description";
    addMain.appendChild(criaH3);
}

//10 🚀 Adicione a classe title na tag h1 criada;

novoTexto.className = "title";

//12 🚀 Remova a section criada no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();

//addMain.removeChild(addSection2); 

//13 🚀 Centralize a section criado no passo 6 (aquele que possui a classe right-content). 
//Dica: para centralizar, basta configurar o margin-right: auto da section;

let centraliza = document.getElementsByClassName("section6")[0];
centraliza.style.marginRight="auto";


//14 🚀 Troque a cor de fundo do elemento pai da section criada no passo 3 
//(aquela que possui a classe center-content) para a cor verde;

//addSection.style.backgroundColor = "dark-green";
let mudaCor = document.getElementsByClassName("section-content")[0];
mudaCor.style.backgroundColor="green";

//15 🚀 Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.

let removeItem = document.querySelectorAll(".li");

for(let i=0; i<removeItem; i+=1){
    let elemento = removeItem[i];

    if(elemento.innerText.includes('nove')){
        listaNO.removeChild(elemento);
    }
}







    










