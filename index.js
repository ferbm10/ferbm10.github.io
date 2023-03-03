console.log("Hola mundo");

// variables
var nombre = "Marcos";
var edad = 25.23;

// DOM
const btn = document.querySelector('#boton');

btn.setAttribute("type", "submit");
console.log(btn.getAttribute("type"));

btn.addEventListener('click', () =>{
    const container = document.querySelector('#container');
    const btn2 = document.createElement('button');
    btn2.type = 'reset';
    btn2.append(document.createTextNode('Second button'))

    container.appendChild(btn2);
});

var elemento = document.getElementById("info");
elemento.innerHTML = "Hallo";
elemento.style.color = "red";
elemento.style.fontSize = "30px";

var ones = document.getElementsByTagName("span");
console.log(ones);

for(var i = 0; i < ones.length; i++){
    ones[i].style.fontSize = "2em";
}

let padre = document.getElementById('padre');
let resultado = document.getElementById('resultado');
// resultado.innerText = padre.nodeName;

let hijos = padre.childNodes;
resultado.innerText = hijos.length;

function reemplazarCabecera(){
    var nuevoH2 = document.createElement("h2");
    var nuevoH2Texto = document.createTextNode("Welcome!");
    nuevoH2.appendChild(nuevoH2Texto);
    var miDiv = document.getElementById("id1");
    var viejoP = document.getElementById("para1");
    miDiv.replaceChild(nuevoH2, viejoP);
    var miParrafo = document.getElementById("para2");
    miDiv.removeChild(miParrafo);
}

window.onload = function(){
    document.getElementById("btn").onclick = reemplazarCabecera;
}

var myCheckBoxOne = document.forms["my_form"]["option2"];
alert(myCheckBoxOne.checked);

// document.forms
