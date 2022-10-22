//Um objetivo é armazenar varias informações 
//em uma unica variavel, com o mesmo principio 
//de um array mas com um grupo de informações

let familia = {
    pai: 'Sandro',
    mae:'Luciana',
    filho: 'Ayla'
}

console.log(familia); //acessa todos os itens do objetvo familia

console.log(familia.filho);// acessar apenas um iten especifico do objetvo familia

console.log(`Ayla é filha de ${familia.pai} e ${familia.mae} `);

//Objeto dentro de objeto

let familiaBrito = {
    pai: 'Sandro',
    mae: 'Luciana',
    filho: 'Ayla',
    sandro: {
        idade:34,
        genero: 'Homen',
    },
    luciana: {
        idade:33,
        genero: 'Mulher'
    }
}

console.log(familiaBrito);
console.log(` ${familiaBrito.filho} é filha de ${familiaBrito.pai} e ${familiaBrito.mae}`);
console.log(familiaBrito.luciana.idade);
console.log(familiaBrito.sandro.idade);