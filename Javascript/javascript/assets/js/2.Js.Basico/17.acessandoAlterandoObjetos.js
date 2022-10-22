//Exemplo de objeto com array
let personagem = {
    nome: 'Sandro',
    idade: 34,
    carros: [   //carros é um array
        {modelo: 'Fiat', cor: 'Azul'}, //modelo é um objeto
        {modelo: 'Ferrari', cor: 'Vermelha'}
    ]
}

console.log(personagem.carros[0].modelo);
