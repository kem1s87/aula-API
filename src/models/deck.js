const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Content = sequelize.define('Contents', {
    Name: {
        type: DataTypes.UUIDV4,
        primaryKey: true
    },
    describe: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = User;