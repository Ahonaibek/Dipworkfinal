const mongoose = require('mongoose');

function connectDB() {

    mongoose.connect('mongodb+srv://Aibek:123@cluster0.9bdckfv.mongodb.net/CarShare', { useUnifiedTopology: true, useNewURLParser: true })

    const connection = mongoose.connection

    connection.on('connected', () => {
        console.log('Mongo DB connected')
    })

    connection.on('error', () => {
        console.log('Mongo DB error')
    })


}

connectDB()

module.exports = mongoose
