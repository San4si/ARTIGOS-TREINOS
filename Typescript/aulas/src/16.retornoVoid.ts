//Void é quando a função não tem nenhum tipo de retorno
//quando vc nao espera um tipo de retorno na função

//Exemplo como remover um elemento da tela

function removerElemento(el: HTMLElement | null): void {
    //processo de remoção do elemento
    el?.remove();
}

removerElemento( document.getElementById('teste') );

