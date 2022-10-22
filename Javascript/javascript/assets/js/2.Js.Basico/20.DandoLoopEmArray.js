let cores = ['Azul', 'Preto', 'Vermelho'];
cores.push('Verde');

//formas diferentes de usar o for

for(let n = 0; n < cores.length; n++) {
    console.log(cores[n]);
}

console.log('**********************');

for(let i in cores){
    console.log(cores[i]);
}

console.log('**********************');

for(let cor of cores){
    console.log(cor);
}

console.log('**********************');

let paletaCores = [
    {nome: 'preto', qt: 10},
    {nome: 'Azul', qt: 5},
    {nome: 'Vermelho', qt: 15}
];

//tornando letras maiusculas

for (let i in paletaCores){
    paletaCores[i].nome = paletaCores[i].nome.toLocaleUpperCase();
}

console.log(paletaCores);