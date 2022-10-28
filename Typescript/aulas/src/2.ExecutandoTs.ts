//as HTMLInputElement todo elemento do html possui a propriedade value
//toString() pega o resultado final e converte para string

let numero1 = document.getElementById('numero1') as HTMLInputElement;
let numero2 = document.getElementById('numero2') as HTMLInputElement;
let botao = document.getElementById('calcular');
let res = document.getElementById('resultado');

function calcular(n1: number,n2: number){
        return n1 + n2;
    }
    

botao.addEventListener('click', function(){
    res.innerHTML = calcular(+numero1.value, +numero2.value).toString();//colocando o sinal + para converter para inteiro - toString pegando o resultado final e convertendo para string
    //res.innerHTML = calcular(parseInt(numero1.value), parseInt(numero2.value)); //Outra forma é usando parseInt para converter para inteiro
});