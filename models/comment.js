const Sequelize = require('sequelize')
const sequelize = require('../config/database')
const Comment = sequelize.define('comment',{
    com_id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    text:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    date:{
        type:Sequelize.DATE,
        defaultValue:Date.now
    },
        

    //Foreign keys
    user_id:{
        type:Sequelize.INTEGER,
        references:{
            model:'users',
            key:'user_id',
        }
    },
    post_id:{
        type:Sequelize.INTEGER,
        references:{
            model:'posts',
            key:'post_id',
        }
    }



})

module.exports = Comment