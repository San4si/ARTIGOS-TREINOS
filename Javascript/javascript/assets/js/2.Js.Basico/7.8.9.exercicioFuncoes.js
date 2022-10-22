/*
Calcule a porcentagem entre 2 numeros.
Exemplos: 25% de 40 é 10
Formula de porcentagem: (y / x) * 100
Uso da função:

let x = 40;
let y = 10;
let pct = calPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);
*/

/* outra forma de fazer a função

function calcPct(n1,n2){
    let pct = (n1/n2) * 100;
    return pct;
}

*/ 
console.log('Resultado Exercicio 1');

function calcPct(n1,n2){
    return (n2 / n1) * 100;
}

let x = 40
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);

console.log('****************************************');

/*
Calcule o preço do imóvel
- m2 = 3.000
- Se tiver 1 quarto, o m2 é 1x
- Se tiver 2 quartos, o m2 é 1.2x
- Se tiver 2 quartos, o m2 é 1.5x
Uso da função:

 */

console.log('Resultado Exercicio 2');

function calcularImovel(metragem,quarto){
    let m2 = 3000;
    let preco = 0;

    switch (quarto){
    case  1 :
        preco = metragem*m2;
    break;
    case  2 :
        preco = metragem * (m2*1.2);
    break;
    case  3 :
        preco = metragem * (m2*1.5);
    break;

    default:
        preco = metragem*m2;
    break;
    }

    return preco;
}

let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);

console.log('****************************************');
console.log('Resultado Exercicio 3');

/* 
Crie uma função que valide usuario e senha
Usuário correto: pedro
Senha correta: 123
*/ 

//Uso da função

function validar(user, password){
    let usuario = 'Luciana';
    let senha = 1234;
    if(user === usuario && password === senha){
        return true;
    }else {
        return false;
    }
}

let usuario = 'Sandro';
let senha = 1234;
let validacao = validar(usuario, senha);
if(validacao){
    console.log('Acesso liberado');
}else {
    console.log('Acesso Negado!');
}