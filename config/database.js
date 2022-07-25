const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres','postgres','Siddharth123',{
    host:'localhost',
    dialect:'postgres'
})
sequelize.authenticate()
.then(()=>{
    console.log('connected to the database..')
})
.catch(err =>{
    console.log('Error',err)
})
module.exports = sequelize