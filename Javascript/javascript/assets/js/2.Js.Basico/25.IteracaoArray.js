//every() retorna positivo quando todos forem verdadeiro
//some() retorna positivo quando um dos itens forem verdadeiros
//filter() retorna o filtro
//includes() procura um item especifico no array

let fruits = ['Banana', 'Abacate', 'Maça', 'Uva'];

let bigFruits = fruits.filter((value) => {
    return value.length > 4;//retorna itens acima de 4 caracteres
    /*if(value.length > 4){
        return true;
    }else {
        return false;
    }

    */
});

console.log(bigFruits);

//Outras formas diferentes de fazer a mesma coisa

//como saber se todas as frutas tem mais de tres letras
console.log('**************************');

let ok = fruits.every((value) =>{
    return value.length > 3;
});

if(ok){
    console.log('todos são maior que 3');
}else {
    console.log('Não sao todos maior que 3');
}

//Procurando um item no array


if(fruits.includes('Abacate')){
    console.log('Tem abacate sim!');
}else {
    console.log('Não tem abacate....');
}