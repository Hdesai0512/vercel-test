const mongoose = require('mongoose')

const vehicleSchema = new mongoose.Schema({
    make:{
        type: String,
        required: true
    },
    model: {
        type: String,
        require: true
    },
    
    manufactor:{
        type: String   
    },
    horsePower: {
        type: Number
    }
})

module.exports = mongoose.model('Vehicle', vehicleSchema)