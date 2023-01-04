//temos dois tipos de for
//FOR LOOP
//FOR ARRAY


/*for(let n= 0; n < 15; n++){
    console.log('Frase qualquer ' + n);
}*/

let texto = '';

for(let i= 0; i < 50; i++){
    texto = texto + i + '</br>';
}

document.getElementById('demo').innerHTML = texto;


//FOR ARRAY
let carros = ['Ferrari', 'Fusca', 'Monza', 'Brasilia', 'Lawnbogruini'];

let html = '<ul>';

for(let y in carros){
    html += '<li>' + carros[y] + '</li>';
}

html += '</ul>';

document.getElementById("car").innerHTML = html;