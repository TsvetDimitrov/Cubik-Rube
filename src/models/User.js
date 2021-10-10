const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: [3, 'User cannot be less than 3 symbols']
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Your pass must me longer than 5 characters']
    }
});

//Hash password here instead of the service

// userSchema.pre('save', function (next) {
//     bcrypt.hash(this.passwrod, 10)
//         .then(hash => {
//             this.password = hash;
//             next();
//         });
// });

userSchema.static('findByUsername', function (username) {
    return this.findOne({ username });
});


const User = mongoose.model('User', userSchema);
module.exports = User;