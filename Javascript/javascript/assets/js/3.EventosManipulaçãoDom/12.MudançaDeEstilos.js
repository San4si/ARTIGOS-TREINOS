function azul(){
    limpar();
    document.getElementById("titulo").classList.add('azul');
}

function vermelho(){
    limpar();
    document.getElementById("titulo").classList.add('vermelho');
}

function verde() {
    limpar();
    document.getElementById("titulo").classList.add('verde');
}

function limpar(){
    document.getElementById("titulo").classList.remove("azul");
    document.getElementById("titulo").classList.remove("vermelho");
    document.getElementById("titulo").classList.remove("verde");
}

//funcao para alterar o estilo
function mostraTel(elemento){
    elemento.style.display = 'none';//remove o botão e mostra o texto
    document.getElementById("telefone").style.display = "block";//motra o 'texto' telefone
}