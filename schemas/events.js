const mongoose =require('mongoose')

const eventSchema = new mongoose.Schema({
    Organization: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = User = mongoose.model('event', eventSchema)