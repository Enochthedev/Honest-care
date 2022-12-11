const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { type: String, required: true, unique: true, dropDups: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    phone: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    profileImage: { type: String, default: 'https://www.w3schools.com/howto/img_avatar.png' },
    dateCreated:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);