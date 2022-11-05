//Context type
//typescript reconhecendo a tipagem
let names = ['Sandro', 'Pedro', 'Maria'];

names.forEach( function(nome){
    console.log(nome.toUpperCase());
});

//typescript desconhece a tipagem, necessario colocar um if
let nomes = ['Sandro', 'Pedro', 90];

nomes.forEach( function(nome){
    if(typeof nome === 'string'){//Só entra se for string
    console.log(nome.toUpperCase());
    }else {
        console.log(nome);
    }
});