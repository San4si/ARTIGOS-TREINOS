// this acessa o proprio objeto
let pessoa = {
    nome: 'Sandro',
    sobrenome: 'Ferreira',
    idade: 34,
    nomeCompleto: function (){ //função arrow function nao funciona porque é uma funcao anonima não tem pai, entao nao tem acesso ao this
        return this.nome + ' ' + this.sobrenome;
    }
}

console.log(pessoa.nomeCompleto());