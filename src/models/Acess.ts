import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

interface AcessInstance extends Model {
    acessId: number,
    list_id: number,
    user_id: number
}

export const Acess = sequelize.define<AcessInstance>('Acess', {
    acessId: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    list_id: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    user_id: {
        allowNull: false,
        type: DataTypes.INTEGER
    }
})