//Variavel de escopo local só funciona dentro do espoco
//Global funciona dentro e fora do escopo

let count = 0;

function add(){
    count++;
}

add();

console.log(count);

console.log("*************************************");

//Função dentro de função

function square(x){
    return x* x;
}

function AddSquares(a, b){
    let sqrA = square(a);
    let sqrB = square(b);

    return sqrA + sqrB;
}

console.log(AddSquares(2,3));

/* outra forma de fazer a mesma função só que declarando 
a função square dentro de outra função.

function AddSquares(a, b){
    function square(x){
    return x* x;
}
    let sqrA = square(a);
    let sqrB = square(b);

    return sqrA + sqrB;
}

console.log(AddSquares(2,3));


Declarando a mesma função como arrow function(boa pratica)

function AddSquares(a, b){
    const square = (x) => x*x;

    let sqrA = square(a);
    let sqrB = square(b);

    return sqrA + sqrB;
}

console.log(AddSquares(2,3));

*/
