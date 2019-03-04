const Test = require('./Test/Test.entity');
module.exports = function (app,sequelize) {
    /* ENTITIES */
    Test(app,sequelize);
};
