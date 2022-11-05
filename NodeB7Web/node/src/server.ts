//importando a biblioteca 
// , {Request, Response } = tipando , ao colocar 
//,{} estamos pegando outras coisas no express no caso a tipagem request e response 
import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import mainRoutes from './routes/index';
import painelRoutes from './routes/painel';
import path from 'path';
import mustache from 'mustache-express';//importando mustache

dotenv.config();

const server = express();

//configurando mustache
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));//indicando onde estao os arquivos html no projeto
server.engine('mustache', mustache());//usando o mustache

//como disponibilizar uma pasta como publicamente acessivel como arquivo estatico
server.use(express.static(path.join(__dirname, '../public')));//pegando o endereço absoluto ate a pasta public

//Habilitando o corpo da requisição para serem acessiveis dentro da minha rota
server.use(express.urlencoded({extended: true}));

server.use('/', mainRoutes);
server.use('/painel', painelRoutes);

//quando a pagina não encontrou nenhuma das rotas
server.use((req: Request, res: Response)=>{
    res.status(404).send('Pagina não encontrada!');
});

// colocando a porta do servidor no primeiro parametro
server.listen(process.env.PORT);

