//Ajudando o typescript a ser mais especifico

// Usando o ' as ' para confirmar ao typescript tipagems
//Ex: abaixo confirmando que o campo é um input

let idadeField = document.getElementById('idade') as HTMLInputElement;

//sem o 'as' retornaria um erro no value
console.log(idadeField.value);