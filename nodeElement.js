// Acesse o elemento elementoOndeVoceEsta. OK
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele. OK
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// Acesse o primeiroFilho a partir de pai. OK
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta. OK
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta. OK
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta. OK
// Agora acesse o terceiroFilho a partir de pai. OK

console.log(document.getElementById("elementoOndeVoceEsta"));
document.getElementById("elementoOndeVoceEsta").parentElement.parentElement.style.color = "red";
document.getElementById("primeiroFilhoDoFilho").innerText = "Teste";
console.log(document.getElementById("pai").firstElementChild);
console.log(document.getElementById("elementoOndeVoceEsta").previousElementSibling);
console.log(document.getElementById("elementoOndeVoceEsta").nextSibling);
console.log(document.getElementById("elementoOndeVoceEsta").nextElementSibling);
console.log(document.getElementById("pai").lastElementChild.previousElementSibling);


let elementoMaisUm = document.createElement("section");
elementoMaisUm.id = "elementoMaisUm";
let chamarPai = document.getElementById("pai");
chamarPai.appendChild(elementoMaisUm);
console.log(elementoMaisUm); 

let wally = document.createElement("section");
wally.id = "wally";
let chamarOnde = document.getElementById("elementoOndeVoceEsta");
chamarOnde.appendChild(wally);
console.log(document.getElementById("elementoOndeVoceEsta"));

let daPuta = document.createElement("section");
daPuta.id = "daPuta";
let chamaFi = document.getElementById("primeiroFilhoDoFilho");
chamaFi.appendChild(daPuta);
console.log(document.getElementById("daPuta"));

console.log(document.getElementById("daPuta").parentNode.parentElement.parentNode.lastChild.previousElementSibling.previousElementSibling);

chamarPai.removeChild(primeiroFilho);
chamarOnde.removeChild(segundoEUltimoFilhoDoFilho);
chamarPai.removeChild(elementoMaisUm);
chamarOnde.removeChild(wally);
chamarPai.removeChild(terceiroFilho);
chamarPai.removeChild(quartoEUltimoFilho);


console.log(document.getElementById("pai"));

console.log(document.getElementById("dbz").innerText);

console.log(document.getElementById("stark_childs").lastElementChild.innerHTML);

console.log(document.getElementById("avengers").nextElementSibling.innerText);
