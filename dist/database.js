"use strict";
// const sequelize = new Sequelize('database_name', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'postgres',
// });
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('User_ts_23092024', 'postgres', 'SmartWork@123', {
    host: 'localhost',
    dialect: 'postgres'
});
exports.default = sequelize;
