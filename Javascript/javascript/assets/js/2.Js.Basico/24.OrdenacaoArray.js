//sort(); reordena em ordem alfabetica de A para Z acrescente
//reverse(); inverte a ordem do array de Z para A decrescente

//Array de objetos

let cars = [
    {brand: 'Fiat', year: 2022 },
    {brand: 'Bmw', year: 2008 },
    {brand: 'Ferrari', year: 2020 }
]

cars.sort((a, b) => {
    if (a.year > b.year){
        return 1;
    }else if (a.year < b.year){
        return -1;
    }else {
        return 0;
    }
});

console.log(cars);

console.log('********************************');
console.log('Outra forma de fazer esta função');

cars.sort((a,b) => {
    return a.year - b.year;
});

console.log(cars);

console.log('Mais outra forma');
console.log('****************************');

cars.sort((a,b) => a.year - b.year);

console.log(cars);