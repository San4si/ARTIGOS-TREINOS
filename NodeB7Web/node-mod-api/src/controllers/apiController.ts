import { Request, Response } from 'express';
import { Sequelize } from 'sequelize';
import {Phrase} from '../models/Phrase';

//Primeiro endpoint de teste chamado: PinPong para saber se a api esta funcionando
// a api estara esperando uma requisição get para /ping
export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

//Criando um numero radomico, vamos retornar um numero aletorio
export const random = (req: Request, res: Response) => {
    let nRand: number = Math.floor( Math.random() * 10);// Gerando um numero aleatorio entre 0 e 10
    res.json({number: nRand});
}

//Enviar um nome e retornar este nome para indicar que estamos recebendo dados
export const nome = (req: Request, res: Response) => {
    let nome: string = req.params.nome;
   // res.json({nome}); //outra forma de exibir
    res.json({nome: `Você enviou o nome: ${nome}`});//exibindo com template string
}

//Criando uma nova frase
export const createPhrase = async (req: Request, res: Response) => {
    /*O processo para criar uma frase primeiro temos que receber os dados foram enviados 
    Requisição usando o metodo post recebemos os dados no corpo da requisição
    */
   //let author: string = req.body.author; 
   //let txt: string = req.body.txt;
   let {author, txt } = req.body;

   //agora vou usar estes dados para inserir no banco de dados atraves do model
   let newPhrase = await Phrase.create({author, txt}); 
   
   //dizendo que foi criado com sucesso a nova frase
   res.status(201);
   //Retornando a frase no json de retorno
       res.json({ id: newPhrase.id, author, txt});
}

//Listando todas as frases
export const listPhrases = async (req: Request, res: Response) => {
    let list = await Phrase.findAll();//pguei todas as minhas frases
    res.json({list});
    //dando retorno
}

//Pegando informação de uma frase
export const getPhrase = async (req: Request, res: Response) => {
    let {id} = req.params;

    let phrase = await Phrase.findByPk(id);
    if(phrase){
        res.json({ phrase });//Se achei a frase eu mando ela com toda informação do id
    }else {
        res.json({ error: 'Frase não encontrada' });//caso id nao encontrado eu mando um erro
    }
}

//Atualizando informações de uma frase
export const updatePhrase = async (req:Request, res: Response) => {
    let {id} = req.params;
    let { author, txt } = req.body; //informando o que eu preciso receber

    let phrase = await Phrase.findByPk(id);
    if(phrase){
        phrase.author = author;//fazendo a troca das informações
        phrase.txt = txt;
        await phrase.save();//salvando as informações

        res.json({ phrase });//reatorna as informações atualizadas
    }else {
        res.json({ error: 'Frase não encontrada' });//caso id nao encontrado eu mando um erro
    }
    
};

export const deletePhrase = async (req: Request, res:Response) => {
    let { id } = req.params; //pegando o id dos parametros

    await Phrase.destroy({where: {id:id}});
    res.json({});//nao retorna nada pois deletamos
}

//Pegando uma frase aleatoria = get /frase/aleatoria
export const randomPhrase = async (req: Request, res:Response) => {
    //pegando um item aleatoriamento do banco de dados, precisamos da ajuda do sequelize vamos importar
    let phrase =await Phrase.findOne({//findOne pega uma frase especifica
        order: [
            Sequelize.fn('RANDOM') // função que executa dentro do postgres (com mysql a função é 'RAND')
        ]
    });

    if(phrase){
        res.json({ phrase });
    }else {
        res.json({error: 'Não ha frase cadastradas'});
    }
  
}