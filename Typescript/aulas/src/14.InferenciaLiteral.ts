//mandando o valor certo, mas pode dar problema se for modificada

//Exe uma requisição que recebe 'post' ou 'get'

//causando problema

function fazerRequisicaoo(url: string, method: 'GET' | 'POST'){
    //....
}


let reqs = {
    url: 'https://www.google.com.br',
    method: 'GET'
}

fazerRequisicao(reqs.url, reqs.method);

//Resolvendo o problema 

function fazerRequisicao(url: string, method: 'GET' | 'POST'){
    //....
}

type RequestDEtails = {
    url: string,
    method: 'GET' | 'POST'
};

let req: RequestDEtails = {
    url: 'https://www.google.com.br',
    method: 'GET'
}

fazerRequisicao(req.url, req.method);



