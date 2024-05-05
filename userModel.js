const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
 {
    nombre: {
        type: String
    },

    apellido: {
        type: String
    },

    edad: {
        type: Number
    }
 },
    {
        timestamp: true,
        versionKey: false,
    }

)
 
const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
