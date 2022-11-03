//importando a biblioteca 
// , {Request, Response } = tipando , ao colocar 
//,{} estamos pegando outras coisas no express no caso a tipagem request e response 
import express, {Request, Response } from 'express';

//usando o servidor
const server = express(); 

//configurando a pag principal no site
server.get('/contato', (req: Request, res: Response)=>{
    res.send('Pagina de contato!');//quando entrar na pag principal manda a mensagem ola mundo!.
});

// colocando a porta do servidor no primeiro parametro
server.listen(80);

