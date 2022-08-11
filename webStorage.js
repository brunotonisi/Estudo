pegaBody=document.getElementsByTagName("body")[0];
pegaSection=document.getElementById("text-section");
pegaInput1=document.getElementById("phrases-input1");
pegaInput2=document.getElementById("phrases-input2");
pegaInput3=document.getElementById("phrases-input3");
pegaInput4=document.getElementById("phrases-input4");
pegaInput5=document.getElementById("phrases-input5");
pegaInput6=document.getElementById("phrases-input6");


//localStorage.clear();

// Essas preferências devem ser salvas de forma que, ao retornar à página, 
// as preferências que foram previamente configuradas possam ser aplicadas na tela.

//Cor de fundo da tela;

function mudaCor(){
    var cor = JSON.parse(localStorage.getItem('background-color'));
    pegaBody.style.backgroundColor = cor;

}

function guardaCor(){
    var x = pegaInput1.value;
    localStorage.setItem('background-color', JSON.stringify(x));
    mudaCor();
}

let botao1 = document.getElementById("bgcolor");
botao1.addEventListener('click', guardaCor);



//Cor do texto;

function mudaTexto(){
var x = JSON.parse(localStorage.getItem('text-color'));
pegaSection.style.color = x;
}

function guardaTexto(){
var x = pegaInput2.value;
localStorage.setItem('text-color',JSON.stringify(x));
mudaTexto();
}

let botao2 = document.getElementById("txtcolor");
botao2.addEventListener('click',guardaTexto);



// Tamanho da fonte;

function mudaTamFonte(){
    var x = JSON.parse(localStorage.getItem('font-size'));
    pegaSection.style.fontSize = x;

}

function guardaTamFonte(){
    var x = pegaInput3.value;
    localStorage.setItem('font-size', JSON.stringify(x));
    mudaTamFonte();
}

var botao3 = document.getElementById('fontsize');
botao3.addEventListener('click', guardaTamFonte);



// Espaçamento entre as linhas do texto;


function mudaEspaco(){
  var x = JSON.parse(localStorage.getItem('font-space'));
  pegaSection.style.letterSpacing = x;
}

function guardaEspaco(){
    var x = pegaInput4.value; 
    localStorage.setItem('font-space', JSON.stringify(x));
    mudaEspaco();
}

var botao4 = document.getElementById("fontspacing");
botao4.addEventListener('click', guardaEspaco);


// Tipo da fonte (Font family)

function mudaFonte(){
 var x = JSON.parse(localStorage.getItem('font-family'));
 pegaSection.style.fontFamily = x;
}

function guardaFonte(){
    var x = pegaInput5.value;
    localStorage.setItem('font-family',JSON.stringify(x));
    mudaFonte();
}

let botao5 = document.getElementById("fontfamily");
botao5.addEventListener('click', guardaFonte);


// As propriedades descritas acima são obrigatórias, mas você é livre para 
// adicionar qualquer outra propriedade que julgar válida e que tenha como 
// objetivo a melhora da experiência da pessoa que lê em sua página.




function legal(){
window.location.href="https://www.youtube.com/watch?v=ADdpLv3RDhA";
}

var botao6=document.getElementById("ftp");
ftp.addEventListener('click', legal);




window.onload = function(){
    mudaCor();
    mudaTexto();
    mudaTamFonte();
    mudaEspaco();
    mudaFonte();
}