//1. Faça um loop que mostre todas as frutas
let fruits = ['Maça', 'Uva', 'Banana'];

for(let n =0;n < fruits.length;n++){
    console.log(fruits[n]);
}

console.log('outra forma de se fazer');

for(let x in fruits){
    console.log(fruits[x]);
}

console.log('***********************');

//2. Conte de 1 até 100 através de um While
let i=1;
while(i<=100){
    console.log(i);
    i++;
}