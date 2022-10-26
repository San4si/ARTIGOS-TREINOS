//getAttribute() pega os atributos
//hasAttribute() Verifica se tem o atributo/ retorna um boolean
//setAttribute() Altera com dois parametros ('qualAtributotrocar', 'queValorColocar')

function clicou(){
    const input = document.querySelector('input');
    const botao = document.querySelector('button');//ocultando e desocultando senha


    //pegando um atributo
    //console.log(input.getAttribute('placeholder'));

    //Se o tipo for igual a texto, tipo igual a senha, senão tipo igual a texto
    if(input.getAttribute('type')=== 'text'){
        input.setAttribute('type', 'password');
        botao.innerText = "Mostrar Senha";//ocultando e desocultando senha
    }else {
        input.setAttribute('type','text');
        botao.innerText = "Ocultar Senha";//ocultando e desocultando senha
    }

    /*
    //alterando atributo
    input.setAttribute('type', 'text');
    */

    /*
    //funcao para saber se existe o attributo
    if(input.hasAttribute('placeholder')) {
        console.log('tem placeholder');
    }else {
        console.log('Não tem');
    }
    */
}