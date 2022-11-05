//Fazendo types para função

//fazendo todas as funções seguir uma padronização 

//criando a padronização com type
type MathFunction = (n1: number, n2: number) => number;//toda funcao tera os parametros number e o retorno dela number

const somarr: MathFunction = (n1,n2) =>{
    return n1 + n2;
};

const subtrairr: MathFunction = (n1,n2) =>{
    return n1 - n2;
};

const multiplicarr: MathFunction = (n1,n2) =>{
    return n1 * n2;
};

const dividirr: MathFunction = (n1,n2) =>{
    return n1 - n2;
};

//Todas as funções estao seguindo a padronização do type MathFunction