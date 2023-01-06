const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    // image: { type: String, required: true },
    name: { type: String, required: true },
    brand:{type: String, required: true},
    price: { type: Number, required: true },
    size: {type: String, required: true},
    category: { type: String, required: true }
});

module.exports = mongoose.model('Product', ProductSchema);
