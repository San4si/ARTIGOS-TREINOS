// Operações em variavel

let x = 0;

x = x + 1;

console.log(x);

let nome1 = 'Sandro';
let sobrenome = 'Brito';

//let nomeCompleto = nome1 + ' ' + sobrenome;
//console.log("Nome: " + nomeCompleto);

// Exemplos de Template String = `` 
// Expressão = ${}

let nomeCompleto = `${nome1} ${sobrenome}`; 
console.log(nomeCompleto);

let idade = 90;
let idadeString = `Idade: ${idade + 10 + ' bla'} anos`;

console.log(idadeString);

