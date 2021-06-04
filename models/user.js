const { Model , DataTypes} = require ("sequelize")
const sequelize = require("../config/connection")
const bcrypt = require("bcrypt")


class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email:
        {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate:{
                isEmail:true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false
        },
        first_name:{
            type: DataTypes.STRING,
            allowNull:true
        },
        last_name:{
            type:DataTypes.STRING,
            allowNull:true
        },
        date_joined:{
            type:"TIMESTAMP",
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull:false
        },
        bio:{
            type:DataTypes.TEXT,
            allowNull:true
        },
        avatar:{
            type:DataTypes.STRING,
            allowNull:true
        }
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: "user",
        freezeTableName: true
    }
)


module.exports = User