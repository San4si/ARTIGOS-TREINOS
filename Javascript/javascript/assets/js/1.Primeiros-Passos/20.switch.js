let professional = "Padrão";

console.log("Professional: " + professional);

switch (professional){
    case 'Fiscal' : 
        console.log("Verde");
    break;
    case 'Bombeiro' : 
        console.log("Vermelho");
    break;
    case 'Policial' :
        console.log("Azul");
    break;
    default:
        console.log('Usa default quando nenhuma das opçoes forem escolhidads');
        break;  
}