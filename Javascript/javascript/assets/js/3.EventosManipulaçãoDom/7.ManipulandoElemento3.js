//createElement(); cria um elemento
//after() depois do elemento
//before() antes do elemento

//Adicionando item ao redor do elemento 

function clicou(){
const teste = document.querySelector('#teste');
const ul = teste.querySelector('ul');

//criando e adicionando um botao
/*
const newButton = document.createElement('button');
newButton.innerHTML = "aqui";

//depois do elemento ul adicione (" ");
ul.after(newButton);
*/
//antes do elemento ul adicione (" ");
//ul.before(newButton);

//Adicionando uma lista 
let newUl = document.createElement('ul');

for (let i = 0; i <5; i++) {
    let newLi = document.createElement('li');
    newLi.innerHTML = "Item add " + i;
    newUl.append(newLi);
}
    ul.after(newUl);
}