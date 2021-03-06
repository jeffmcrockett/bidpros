const mongoose = require('mongoose');
const config = require('config');

let db = config.get("mongoURI");

const connectDB = async () => {
    try {
        mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
            }
        )
        console.log("MongoDB Connected")
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

module.exports = connectDB;