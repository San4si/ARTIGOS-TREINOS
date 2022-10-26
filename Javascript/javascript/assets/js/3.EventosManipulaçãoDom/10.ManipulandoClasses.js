//.classList retorna a lista de classes
//.classList.add('') adiciona uma nova classe
//.classList.remove('') remove a classe
//.classList.contains(' ') verifica se contem a classe
//.classList.toggle('azul') toggle alterna entre classes quando for true vira false e vise versa
//.classList.replace('azul', 'preto') troca a classe azul para a classe preto

function clicou(){
    const button = document.querySelector('button');

    console.log(button);//conferindo se pegou o button

        //Alternando entre classes
        if(button.classList.contains('azul')){
            button.classList.remove('azul');
            button.classList.add('verde');
        } else {
            button.classList.add('azul');
            button.classList.remove('verde');
        }

        //simplificando o if acima
       // button.classList.toggle('azul');// a cada clique alterna para true e false

       if(button.classList.contains('azul')){
        button.classList.replace('azul', 'preto');
       } else {
        button.classList.replace('preto', 'azul');
       }
}