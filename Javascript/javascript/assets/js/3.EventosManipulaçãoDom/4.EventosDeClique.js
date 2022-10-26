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

// Criando evento de clique direto no html
/* 
alterando o texto do proprio botao no html

<button onclick="this.innerHTML='clicou'">Clique aqui</button>

Alterando e Clicando o mouse no h1

aplicando o clique no h1, quando clicar no texto o aciona o alert
<h1 id="titulo" onclick="alert('clicou')">Seja bem vindo</h1>

Passando o mouse no h1 e alterando
Quando o mouse estiver sobre o h1 execute a funcao
<h1 id="titulo" onmouseover="console.log('passou o mouse')">Seja bem vindo</h1>

Quando tirar o mouse do texto
<h1 id="titulo" onmouseout="console.log('Tirou o mouse')">Seja bem vindo</h1>

Combinando os tres eventos
<h1 id="titulo" onclick="console.log('clicou')" 
onmouseout="console.log('Tirou o mouse')" 
onmouseover="console.log('passou o mouse')" 
    >Seja bem vindo</h1>



*/

