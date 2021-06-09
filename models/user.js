const { Model , DataTypes} = require ("sequelize")
const sequelize = require("../config/connection")
const bcrypt = require("bcrypt")


class User extends Model {
    checkPassword(loginPw) {
      return bcrypt.compareSync(loginPw, this.password);
    }
  }




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
        hooks: {
          beforeCreate: async (newUserData) => {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
          },
          beforeUpdate: async (updatedUserData) => {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            console.log("updated data from hook****",updatedUserData)
            return updatedUserData; //TODO: fix issue with hook as it is not firing.
    
          },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
      }
);



module.exports = User