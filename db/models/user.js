let mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        min: 5,
        max: 20
    },

    email: {
        type: String,
        required: true,
        min:1,
        trim: true
    }
});

let User = mongoose.model('User', UserSchema);

module.exports = {User}

