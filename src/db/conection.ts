import { Sequelize } from 'sequelize';

const db = new Sequelize('bd_pos', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging:false

});
export default db;
