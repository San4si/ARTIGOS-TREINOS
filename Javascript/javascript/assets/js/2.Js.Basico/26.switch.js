    let dia = 6;
    let diaDaSemana = '';

    switch(dia){
        case 1:
            diaDaSemana= "Segunda-feira"
            break;
        case 2:
            diaDaSemana= "Terça-feira"
            break;
        case 3:
            diaDaSemana= "Quarta-feira"
            break;
        case 4:
            diaDaSemana= "Quinta-feira"
            break;
        case 5:
            diaDaSemana= "Sexta-feira"
            break;
        case 6:
            diaDaSemana= "Sabádo"
            break;
        case 7:
            diaDaSemana= "Domingo"
            break;
        default:
            diaDaSemana= "Nenhum dia compativel";
            break;
    }

   
 document.getElementById("dia").innerHTML = 'O dia da semana é: ' + diaDaSemana;


 
 let semana = '';

        switch(dia){
            case 6:
            case 7:
                semana = 'Final de semana'
                break;
            default :
                semana = 'Dia comercial'
        }

        document.getElementById("diaAtual").innerHTML = 'Hoje é: ' + semana;

    
