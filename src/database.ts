import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('User_ts_23092024','postgres','SmartWork@123',{
    host:'localhost',
    dialect:'postgres'
})

export default sequelize;

