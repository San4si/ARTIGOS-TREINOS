import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export interface ConsentInstance extends Model {
    id: number;
    status: boolean;
    permissions: string;
}

export const Consent = sequelize.define<ConsentInstance>('Phrase', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.BOOLEAN
    },
    permissions: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'consents',
    timestamps: true
});