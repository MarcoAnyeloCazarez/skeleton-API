/*
    "id": "ed025bbb-5fbe-4ddf-9670-e43ce9d80c52",
    "first_name": "Anayelo",
    "last_name": "Cazarez",
    "email": "anyelocba7@gmail.com",
    "password": "$2b$10$J8MM4kUcqvaSIxoOmUobHeVttKsjhLCgyjDQ3kPNuq9CCc7O/WeP2",
    "phone": "",
    "birthday_date": "16/03/1994",
    "rol": "normal",
    "profile_image": "",
    "country": "México",
    "is_active": true,
    "verified": false
*/

const { DataTypes } = require('sequelize')
//const { validate } = require('uuid')
const {db} = require('../utils/database')


//! generando el primer modelo de usuarios
const Users = db.define('users', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allow: null
    },

    first_name: {
        alloNull: false,
        type: DataTypes.STRING
    },

    last_name: {
        alloNull: false,
        type: DataTypes.STRING
    },

    email: {
        alloNull: false,
        type: DataTypes.STRING(30),
        unique: true,
        validate: {
            isEmail: true
        }
    },
    
    password: {
        alloNull: false,
        type: DataTypes.STRING,
        validate: {
            min: 8
        }
    },

    phone: {
        alloNull: false,
        type: DataTypes.STRING,
        validate: {
            min: 10,
            max: 14
        }
    },

    birthday_date: {
        alloNull: false,
        type: DataTypes.DATEONLY
    },

    role: {
        alloNull: false,
        type: DataTypes.STRING,
        defaultValue: 'normal'
    },

    profile_image: {
        type: DataTypes.STRING,
        validate: {
            isUrl: true
        }
    },

    country: {
        alloNull: false,
        type: DataTypes.STRING
    },

    status: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'active'  //actve, non active, deleted, suspended
    },

    verified: {
        alloNull: false,
        type: DataTypes.BOOLEAN,
        defaultVlue: false
    }
})

module.exports = Users