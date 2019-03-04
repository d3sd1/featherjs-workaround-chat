const Sequelize = require('sequelize');
const Entities = require('./Entity/index');

module.exports = function (app) {
    const sequelize = new Sequelize('tecland', 'root', '1234', {
        host: 'localhost',
        dialect: 'mysql',
        operatorsAliases: false,

        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    });
    sequelize.authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });

    Entities(app,sequelize);


}
