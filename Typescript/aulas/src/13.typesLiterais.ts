//Dizer ao types do item especifico o valor que ele tem

//Fazendo a função aceitar somente tres tipos 'left', 'right', 'center'

function showText (texto: string, alinhamento: 'left' | 'right' | 'center'){
    return `<div style="text-align: ${alinhamento}"> ${texto}</div>`;
}

showText('Bola', 'left');
showText('Quadra', 'right');

//vejamos o erro ao tentar inserir um item não aceito
showText('Gol', 'blabla'); 

//Outros exemplos

//Retornos especificos para uma função

//retornando apenas true ou false
function temNome(nome: string): true | false {
    if(nome !== ''){
        return true;
    }else {
        return false;
    }
}

//outra forma usando o boolean
function temNomess(nome: string): boolean{
    if(nome !== ''){
        return true;
    }else {
        return false;
    }
}

//outra forma usando o type

type TrueOrFalse = true | false;

function temNomes(nome: string): TrueOrFalse{
    if(nome !== ''){
        return true;
    }else {
        return false;
    }
}

type Opcoes = {
    width: number,
    height: number
}

function configurar( props: Opcoes | 'auto'){

}

configurar({width: 100, height: 200});
configurar('auto');
configurar('automatico'); // não aceita insercao

