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
const { validate } = require('uuid')
const db = require('../utils/database')


//! generando el primer modelo de usuarios
const Posts = db.define('posts', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allow: null
    },

    title: {
        alloNull: false,
        type: DataTypes.STRING
    },

    user_id: {
        alloNull: false,
        type: DataTypes.UUID
    }
})

module.exports = Posts