//vou fazer uma condição enquanto for satisfatoria

/*
while(true){
    console.log('Executa');
}


let numero = 0;

while(numero < 10){
    console.log('Executa');
    numero++;
}
*/
let html = '';

let n = 0;

while(n <= 10){
    html += "Numero: "+" &nbsp;&nbsp;"+n + "</br>"
}

document.getElementById("show").innerHTML = html;

//Fazendo o mesmo while com for

for(let numero= 0; numero < 10; numero++){
    html += "Numero: "+ numero + "</br>"
}