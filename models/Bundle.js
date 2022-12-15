const mongoose = require('mongoose');

const BundleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: { type: mongoose.Types.ObjectId, ref: 'User' },
    products: [{
        type: mongoose.Types.ObjectId,
        ref: 'Product'
    }],
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Bundle', BundleSchema);