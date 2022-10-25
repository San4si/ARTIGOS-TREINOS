//Existem varias formas para conseguir manipular elementos, 
//fazer qualquer tipo de alteração no elemento
//inner significa interno
//innerHTML reconhece dentro das aspas como html
//innerTEXT reconhece como texto
//outerHTML out vem de fora, o princio é o mesmo mas com o conteudo de fora

//Começando a manipular os elementos do Dom
/*
function clico(){ //identificando o que tem dentro do elemento com children
    const teste= document.querySelector('#teste');//pegando o elemento
   // console.log(teste.children); //retorna todos os filhos da div 'teste'
    console.log(teste.children[0].children);// retornando item strong da div, retorna vazio porque nao tem nenhum elemento dentro de strong
}
*/

function clicou(){
    //const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');

    console.log(ul.innerHTML);// retornando o que tem dentro do ul

    //ul.innerHTML = "<li>Alterando item</li>";
    ul.innerHTML = ul.innerHTML + "<li>Adicionando item</li>";
}

