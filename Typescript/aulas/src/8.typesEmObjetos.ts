//types sem tipar o objeto, pode dar problema na exibição
function resumo(usuario){
    return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`;
};

//Implementação da função
let u = {
    nome: 'Sandro',
    idade: 34
};

//dando problema ao exibir da tela
    console.log(resumo(u));

//Tipando o Objeto usuario
function resumos(usuario: {nome: string, idade: number}){
    return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`;
};