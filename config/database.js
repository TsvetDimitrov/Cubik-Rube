const mongoose = require('mongoose');

export function initDatabase(connectionString){
    return mongoose.connect(connectionString);
}


module.exports = initDatabase