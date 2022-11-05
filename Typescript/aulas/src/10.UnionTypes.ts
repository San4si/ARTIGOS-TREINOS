//Union types (Multiplos types) = uma variavel com multiplos tipos


//com | a variavel idade pode ser uma string ou um number
let idade: string | number = 90;

//Fazendo union types em uma função
//Funciona o | porem da problema no toUpperCase, 
//porque toUpperCase nao existe no tipo number
//Para resolver o problema temos que verificar o tipo dentro da função com if typeof
function mostrarIdade(idade: string | number){
    if(typeof idade === 'string'){ //se tipo da idade for string executa abaixo
    console.log(idade.toUpperCase());
    } else {
        console.log(idade);
    }
};

mostrarIdade(90);
mostrarIdade("90");

/*Boa pratica não usar o Any, pois estaria desligando a checagem
do compilador do ts para aquela variavel, então perde todo o proposito 
de usar TS, e isso pode dar uma brecha de passar algum erro sem perceber
*/