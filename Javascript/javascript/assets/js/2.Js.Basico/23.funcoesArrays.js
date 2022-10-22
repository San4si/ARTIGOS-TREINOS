//push() adiciona iten para dentro do Array
//pop(); remove o ultimo iten do array
//shift(); deleta o primeiro iten do array
//join(','); retorna algum iten. Ex: separa cada iten do array por virgula

let fruits = ['Maça', 'Pera', 'Banana', 'Uva'];

fruits[1] = 'Abacate'; //alterando iten 'Pera' do array

fruits[fruits.length -1] = 'Laranja';//alterando o ultimo
//item do array de outro jeito


console.log(fruits.join(' -> '));

