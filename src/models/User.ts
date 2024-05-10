import { Model, DataTypes  } from 'sequelize';
import { sequelize } from '../instances/mysql';

interface UserInstance extends Model {
    id: number,
    username: string,
    email: string,
    passwordHash: string
}

export const User = sequelize.define<UserInstance>('User', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    }, 
    username: {
        allowNull: false,
        type: DataTypes.STRING
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    passwordHash: {
        allowNull: false,
        type: DataTypes.STRING
    }
}, {
    tableName: 'users',
    timestamps: false
})


