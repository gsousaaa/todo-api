import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';
import { getTokenSourceMapRange } from 'typescript';

interface TaskInstance extends Model {
    taskId: number,
    title: string,
    description: string,
    isCompleted?: boolean,
    list_id: number
}


export const Task = sequelize.define<TaskInstance>('Task', {
        taskId: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        title: {
            allowNull: false,
            type: DataTypes.STRING
        },
        description: {
            allowNull: false,
            type: DataTypes.STRING
        },
        isCompleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        listId: {
            allowNull: false,
            type: DataTypes.INTEGER
        }
}, {
    tableName: 'tasks',
    timestamps: false
})
