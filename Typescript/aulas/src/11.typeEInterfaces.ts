//Aprendendo a criar nossos proprios types
//Type e Interface: como usar e diferenças

//Criando um type
type Age = string | number;

let age: Age = 90;//criando a variavel age com o tipo Age

function showAge(i: Age): Age /*tipando retorno*/{
                return i;
            };

//Criando um type objeto
type User = {
    nomee: string,
    idadee: number
};

function detalhe(usuario: User){
    return `Olá ${usuario.nomee}, você tem ${usuario.idadee} anos`;
}

detalhe({
    nomee:'Sandro',
    idadee: 90
});

//Criando usando interface
interface Userr {
    nomee: string,
    idadee: 90
}

function detalhes(usuario: Userr){
    return `Olá ${usuario.nomee}, você tem ${usuario.idadee} anos`;
}

detalhes({
    nomee:'Sandro',
    idadee: 90
});

//Diferença entre type e interface
//O type nao é alteravel, nao consegue adicionar propriedades novas
//O Interface é alteravel, consegue adicionar propriedades

