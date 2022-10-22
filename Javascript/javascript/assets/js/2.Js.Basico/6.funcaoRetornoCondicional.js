function maiorDeIdade(idade){
    if(idade >= 18){
        return true;
        } else {
            return false;
        }
    }

    let idade = 19;
    let verificacao = maiorDeIdade(idade);

    if(verificacao){
        console.log("Maior de Idade");
    }else {
        console.log("Menor de idade");
    }
    