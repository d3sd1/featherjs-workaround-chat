const Sequelize = require('sequelize');
const service = require('feathers-sequelize');
const express = require('@feathersjs/express');

module.exports = function (app, sequelize) {
    /* ORM Entities */
    const Message = sequelize.define('test', {
        text: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        freezeTableName: true
    });

// and a maximum size of 4
    app.use('/tests', service({
        Model: Message,
        paginate: {
            default: 2,
            max: 4
        }
    }));
    app.use(express.errorHandler());

    Message.sync({force: true}).then(() => {
        // Create a dummy Message
        app.service('tests').create({
            text: 'test created on server'
        }).then(message => console.log('Created test', message));
    });
}
