import { Model, DataTypes } from "sequelize";
import { sequelize } from '../instances/mysql';

//type especifico para a instancia de usuário
export interface UserInstance extends Model {
    id: number;
    name: string;
    age: number;
};

//ensinando o sequelize a rodar a tabela de usuários
export const User = sequelize.define<UserInstance>("User", {
    id: {// dizer os campos para o sequelize
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 18
    }

}, {//propriedades especificas para o sequelize
    tableName: 'users', //nome da tabela
    timestamps: false //registro de entrada e saida
});