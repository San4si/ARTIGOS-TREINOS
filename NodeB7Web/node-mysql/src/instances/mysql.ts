import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

//fazendo a conexão
export const sequelize = new Sequelize(
    process.env.MYSQL_DB as string,//banco de dados
    process.env.MYSQL_USER as string,//usuário
    process.env.MYSQL_PASSWORD as string,//senha
    { // configurações
        dialect: 'mysql',//dizendo para o sequelize que esta fazendo uma conexão com mysql
        port: parseInt(process.env.MYSQL_PORT as string)//informando a porta
    }
);
