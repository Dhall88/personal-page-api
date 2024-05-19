const mongooseUser = require('mongoose')

const userSchema = new mongooseUser.Schema({
    fullName: {
        type: String
    },
    email: {
        unique: true,
        type: String
    },
    userName: {
        type: String
    },
    password: {
        type: String,
    },
    }, {
    timestamps: true
})

module.exports = mongooseUser.model('User', userSchema)