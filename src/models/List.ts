import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

interface ListInstance extends Model {
    listId: number,
    title: string
    user_id: number
}

export const List = sequelize.define<ListInstance>('List', {
        listId: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        title: {
            allowNull: false,
            type: DataTypes.STRING
        },
        user_id: {
            allowNull: false,
            type: DataTypes.INTEGER
        }
}, {
    tableName: 'lists',
    timestamps: false
})

