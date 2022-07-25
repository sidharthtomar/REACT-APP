const Sequelize = require('sequelize')
const sequelize = require('../config/database')
const { v4: uuidv4 } = require('uuid');
uuidv4();
const User = sequelize.define('user',{
    user_id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },

    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false,
        select:false
    }
   
})
module.exports = User