//Adicionando algumas funcionalidades
//quero a possibilidade de aceitar somente o nome, 
//deixando a idade opcional

//ao colocar o ? na frente da variavel a torna opcional
function resum(usuario: {nome: string, idade?: number}){
    if(usuario.idade !== undefined){//se eu tenho uma idade exibir nome e idade
        return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`;
    } else { // se não tiver idade exibir somente nome
        return `Olá ${usuario.nome}, tudo bem?`; 
    }
};

let ul = {
    nome: 'Pedro',
};

resumo(ul);




