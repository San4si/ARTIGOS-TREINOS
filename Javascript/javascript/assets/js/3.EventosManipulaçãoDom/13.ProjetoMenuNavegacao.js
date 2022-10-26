//função abrindo e fechando menu

function menuToggle(){
    const menuArea = document.getElementById('menu-area');

    if(menuArea.classList.contains('menu-opened') == true){
        menuArea.classList.remove('menu-opened');
    }else {
        menuArea.classList.add('menu-opened');
    }
}

/*
Outra forma de resolver sem usar css(para testar precisa tirar o #menu-opened do css)
Resolvendo apenas no js

function menuToggle(){
    let menuArea = document.getElementById("menu-area");

    if(menuArea.style.width == '200px'){
        menuArea.style.width = '0px';
    }else {
        menuArea.style.width = '200px';
    }
}
*/