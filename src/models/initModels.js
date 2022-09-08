const User = require('./user.model')
const Posts = require('./posts.model')
const Users = require('./user.model')


//! creamos las relaciones entre los modelos
const initModels = () => {
    Users.hasMany(Posts)
    Posts.belongsTo(Users)
}

module.exports = initModels