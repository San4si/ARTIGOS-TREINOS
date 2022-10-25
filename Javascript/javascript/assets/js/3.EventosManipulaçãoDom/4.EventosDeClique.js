//onClick="clicou()" quando houver um clique, pode colocar uma função e quando clicar 
//a função clicou() sera acionada.
//addEventListener('.botao'); listerner é um escutador de evento, anexa um manipulador de evento
//usando o onclik no documento hmtl colocando no elemento botao o onclick="clicou()


function clicou(){ 
    console.log("Clicou no botão");
}

//Abaixo usando o onclick no Js

let botao = document.querySelector(".botao");
botao.addEventListener("click", () => {
    clicou();
})

//A mesma funcao de com varias opções de fazer

/*let botao = document.querySelector('.botao');
.botao.addEventListener("click", clicou);// mandando a definição dela,pra quando tiver o clique executa
*/

//com função
/*let botao = document.querySelector('.botao');
.botao.addEventListener("click", function() {
    clicou();
})
*/

//com arrow function
/* document.querySelector('.botao').addEventListener("click", () =>{
    clicou();
});

*/