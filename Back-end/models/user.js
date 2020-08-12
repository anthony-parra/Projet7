const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let userSchema = mongoose.Schema({
    email: { type: String, require: true, unique: true },
    password: { type: string, require: true }
});


userSchema.plugin(uniqueValidator); //Application de uniqueValidator sur le schema
module.exports = mongoose.model('User', userSchema);