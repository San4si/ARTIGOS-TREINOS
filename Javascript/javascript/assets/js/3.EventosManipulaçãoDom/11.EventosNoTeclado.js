//Manipulando eventos em campos de textos e tela

//onkeydown="" = Evento ocorre enquanto estiver apertando a tecla 
//onkeypress="" = Evento ocorre enquanto
//onkeyup="" = Evento ocorre enquanto solta a tecla

//Descobrindo o que o usuário digitou

/*campo no arquivo html na tag input
<html>
    <input onkeyup="digitou(event)" id="campo" type="text" />
</html>
*/

function digitou(evento){
    console.log(evento);//verifica o codigo da tecla
}

//Função abaixo somente executada quando apertar enter
function digitou(e){
    if(e.keyCode == 13) { //Cod 13 é a tecla enter
        let texto = document.getElementById("campo").value;

        console.log(texto);
    }
}

//Função abaixo somente executada quando apertar enter e control
function digitou(e){
    if(e.keyCode == 13 && e.ctrlKey == true) {
        let texto = document.getElementById("campo").value;

        console.log(texto);
    }
}