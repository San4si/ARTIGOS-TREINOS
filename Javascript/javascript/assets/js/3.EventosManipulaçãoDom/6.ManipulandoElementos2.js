//Funções e Tecnicas para manipular elementos com funções proprias
//append() adiciona item no final da lista sem atualizar a pagina
//prepend() adiciona no começo da lista sem atualizar a pagina
//createElement(); cria um elemento

function clicou(){
    const ul = teste.querySelector("ul");

    //ul.children[0].innerHTML += "(alterado)";
    //fazendo o mesmo abaixo

    //ul.children[0].append("alterado");

  /*   //criando item e adicionando 
    let newLi = document.createElement("li");
    newLi.innerText = "Item adicionado";

    //adiciona
    ul.appendChild(newLi);
    */
  // ul.prepend(newLi); //adiciona no começo

    // fazendo o mesmo abaixo de outra forma, atualizando a pagina toda

    //ul.innerHTML = "<li>Item adicionado</li>";
}

//innerHTML() altera e atualiza todo o conteudo

//append() altera e atualiza apenas o conteudo alterado, só funciona para texto(nao interpreta como html)

//




