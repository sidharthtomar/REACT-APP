const Sequelize = require('sequelize')
const sequelize = require('../config/database')
const Post = sequelize.define('post',{
    post_id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    text:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    name:{
        type:Sequelize.TEXT
    },
    date:{
        type:Sequelize.DATE,
        defaultValue:Date.now
    },
    user_id:{
        type:Sequelize.INTEGER,
        references:{
            model:'users',
            key:'user_id',
        }


    }
})

module.exports = Post