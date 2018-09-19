const mongoose = require('mongoose');
const validator = require('validator')

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        min: 5,
        max: 20,
        unique: true
    },

    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }

    }
});

let User = mongoose.model('User', UserSchema);

module.exports = {User}

