const mongoose =require('mongoose')

const eventSchema = new mongoose.Schema({
    Organization: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
    password: {
        type: String,
        required: true
    },
})

module.exports = User = mongoose.model('user', userSchema)