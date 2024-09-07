const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/database')

const User = sequelize.define('Users', {
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNul: false
    }
});

module.exports = User;
