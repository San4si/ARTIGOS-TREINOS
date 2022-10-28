//Colocando types em Parametros de funções

//Função colocando a primeira letra do nome com letra mauiscula

function firstLetterUpperCase(name: string){//deve colocar a tipagem para cada parametros que tiver
    let firstLetter = name.charAt(0).toUpperCase();//a variavel firstLetter pega a primeira letra do nome com a funçaõ charAt(0), o 0 pega a primeira posição, toUpperCase joga a letra em caixa alta.
    return firstLetter+name.substring(1);//substring(1) indica para pegar a primeira letra
}

//executando / fazer testar no navegador em inspecionar copiando a funcao e colando no console e executando o comando abaixo. 
firstLetterUpperCase('sandro');

