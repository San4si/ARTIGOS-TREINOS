import { Request, Response } from 'express';
import {Op} from 'sequelize';
//import { sequelize } from '../instances/mysql';//importando a instancia mocada sequelize
import {User} from '../models/User';//importando model user

import { Product } from '../models/Product';

export const home = async (req: Request, res: Response)=>{

    

    /*
    //let usuario = await User.findByPk(1); //Ache pela chave primaria

    let usuario = await User.findOne({
        where: {
            name: "Sandro"
        }
    });

    if(usuario){ //exibindo no console
        console.log(`O usuario ${usuario.name} possui ${usuario.age} anos`);
    }else {
        console.log('Usuario nao encontrado');
    }
    */
    /*
    //Alterando um item especifico
    let results = await User.findAll({ where: {id: 7} });//Selecionando um usuario pelo id
    if(results.length > 0){
        let usuario = results[0];

        usuario.name = 'Testador';
        usuario.age = 18;

        await usuario.save();
    }
    */

    /*
    //Atualizando todos menores de idade para 18
    await User.update({age: 18}, {
        where: {
            age: {
                [Op.lt]: 18
            }
        }
});
*/

    /*
    //Atualizando dados com sequelize
    //1 parametro dados a serem alterados
    //2 parametro Condição para encontrar o(s) tem(s)
    await User.update({ age: 4}, {
            where: {
                id:3
            }
    });
    */

   /* //build + save cria a instancia do usuario
    const user = User.build({
        name: 'Fulaninho',
        age: 25
    });
    await user.save(); //salva no banco
    */
   /*
   //create
   const user = await User.create({
        name: 'Ciclano',
        age: 39
   });
   */

    // consulta no banco
    let users = await User.findAll(); //findAll = pegando todos os usuários no banco de dados
    
    //console.log("USUÁRIOS: ", JSON.stringify(users));//exibindo no console com json



    /* testando banco de dados
    try {
        await sequelize.authenticate();
        console.log("Conexão estabelecida com sucesso!")
    }catch(error){
        console.log("Deu merda: ", error);
    }
    */

    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: [],
        users
    });
};

//criando novo usuário
export const novoUsuario = async (req: Request, res: Response)=>{
    let {name, age} = req.body;

    if(name){
        const newUser = User.build({ name });
        if(age){
            newUser.age = parseInt(age);
        }
        await newUser.save();
    }
    res.redirect('/');
}

export const alterarusuario = async (req: Request, res: Response)=>{
    let {name, age, id} = req.body;

    if(name && age && id){
        await User.update({name:name, age: age},{
            where:{
                id:id
            }
        })
    }
    res.redirect('/')
}

export const deletarusuario =async (req:Request, res:Response) => {
    let {id} = req.body;

    if(id){
        await User.destroy({
            where:{
                id:id
            }
        })
    }
    res.redirect('/')
}