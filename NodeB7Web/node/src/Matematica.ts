let lobo: string = 'Guará';

function somar(x: number,y: number): number
{
    return x + y;
}

function subtrair(x: number,y: number): number
{
    return x - y;
}

function multiplicar(x: number,y: number): number
{
    return x * y;
}

export default {
    somar: somar,
    subtrair: subtrair
};

// a mesma forma quando se tem o mesmo nome
/*export default {
    somar,
    subtrair
};*/
