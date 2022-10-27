//as HTMLInputElement todo elemento do html possui a propriedade value
//toString() pega o resultado final e converte para string
var numero1 = document.getElementById('numero1');
var numero2 = document.getElementById('numero2');
var botao = document.getElementById('calcular');
var res = document.getElementById('resultado');
function calcular(n1, n2) {
    return n1 + n2;
}
botao.addEventListener('click', function () {
    res.innerHTML = calcular(+numero1.value, +numero2.value).toString(); //colocando o sinal + para converter para inteiro - toString pegando o resultado final e convertendo para string
    //res.innerHTML = calcular(parseInt(numero1.value), parseInt(numero2.value)); //usando parseInt para converter para inteiro
});
