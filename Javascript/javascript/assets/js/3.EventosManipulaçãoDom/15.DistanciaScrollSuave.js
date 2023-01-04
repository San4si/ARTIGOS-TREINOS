function subirTela(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'//rolagem suave, posso usar o 'auto' rolagem direta
    });

}

/* outra forma apenas colocando a posição
function subirTela(){
    window.scrollTo(0,0)
};
*/

//Função que decidi se o botao parece ou nao

function decidirBotaoScroll(){
    if(window.scrollY === 0){
        document.querySelector('.scrollbutton').style.display = 'none';
    }else {
        document.querySelector('.scrollbutton').style.display = 'block';
    }
}

//setInterval(decidirBotaoScroll, 1000); //processa dados de um em um segundo

//substituindo funcao de segundos pelo evento que vai monitorar o scroll da tela

window.addEventListener('scroll', decidirBotaoScroll);