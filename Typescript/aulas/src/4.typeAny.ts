//Type 'any' que funciona apenas no typescript, 
//auxilia o ts no processo de verificação dos types
//Utilizado quando quer ignorar um erro de tipagem
//ou quando não a outra solução de resolver um erro

//Exe: Em um array onde só aceita string ao colocar um number
//o typescript não aceitara e mostrara um erro,
// para fazer o ts aceitar outra tipagem
// substituimos a tipagem string e colocamos a palavra any.
//A tradução da palavra any significa 'qualquer'.

//O uso do any é somente utilizado em ultimo caso.

//Exemplo de erro.
let family: string[] = ['Sandro', 'Luciana', 'Ayla'];

family.push(34);//erro onde aceita apenas string

//Exemplo de sucesso com any, aceitando qualquer tipagem abaixo.

let familia: any = ['Sandro', 'Luciana', 'Ayla'];

familia.push(34);//sucesso com any

let coisas: any = ['Sandro', 90, 'Ayla'];

coisas.push(true);