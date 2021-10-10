const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: [3, 'User cannot be less than 3 symbols']
    },
    password: {
        type: String,
        required: true
    }
});


const User = mongoose.model('User', userSchema);
module.exports = User;