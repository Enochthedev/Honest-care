const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');


//User Schema
const UserSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Email: { type: String, required: true, unique: true, dropDups: true },
    Password: { 
        type: String, 
        required: true,
        minlength: 8,
        validate(value) {   
            if(!validator.isStrongPassword(value, {minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1})) {
                throw new Error('Password must be at least 8 characters long, contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 symbol');
            }
        }
     },
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Address: { type: String, required: true },
    City: { type: String, required: true },
    State: { type: String, required: true },
    Zip: { type: String, required: true },
    Phone: { type: String, required: true },
    IsEmailVerified: { type: Boolean, default: false },
    profileImage: { type: String, default: 'https://www.w3schools.com/howto/img_avatar.png' },
    DateCreated:{
        type: Date,
        default: Date.now
    },
    currentBundle: [{
        type: mongoose.Types.ObjectId,
        ref: 'Bundle'
    }],
    
    
    
});



module.exports = mongoose.model('User', UserSchema);