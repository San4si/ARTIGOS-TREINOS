//dentro do controller crio a função que vou utilizar

import { Request, Response } from "express";//importando request e response
import {Product} from '../models/Product';

export const home = (req: Request, res: Response)=>{
    let age: number = 15;
    let showCond: boolean = false;

    if (age > 50){
        showCond = true;
    }

    let user = {
        name: 'Sandro',
    };
    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home.mustache',{ user, showCond,
    products: list, 
    expensives: expensiveList,
    frasesDoDia: []    
    });//renderizando a pagina mustache
};