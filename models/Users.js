const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');


//User Schema
const UserSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { type: String, required: true, unique: true, dropDups: true },
    password: { 
        type: String, 
        required: true,
        minlength: 8,
        validate(value) {   
            if(!validator.isStrongPassword(value, {minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1})) {
                throw new Error('Password must be at least 8 characters long, contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 symbol');
            }
        }
     },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    phone: { type: String, required: true },
    isEmailVerified: { type: Boolean, default: false },
    profileImage: { type: String, default: 'https://www.w3schools.com/howto/img_avatar.png' },
    dateCreated:{
        type: Date,
        default: Date.now
    },
    cart: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    purchaseHistory: [{
        type: mongoose.Types.ObjectId,
        ref: 'PreviousOrders'
    }],
    bundle: {type: mongoose.Types.ObjectId, ref: 'Bundle' }
});



module.exports = mongoose.model('User', UserSchema);