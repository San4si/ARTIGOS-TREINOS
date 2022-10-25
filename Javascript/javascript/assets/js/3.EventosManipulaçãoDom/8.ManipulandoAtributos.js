//getAttribute() pega os atributos
//hasAttribute() Verifica se tem o atributo/ retorna um boolean

function clicou(){
    const input = document.querySelector('input');

    //pegando um atributo
    //console.log(input.getAttribute('placeholder'));

    //funcao para saber se existe o attributo
    if(input.hasAttribute('placeholder')) {
        console.log('tem placeholder');
    }else {
        console.log('Não tem');
    }
}