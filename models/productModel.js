// Require Libs
const mongoose = require('mongoose');

// define user schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    quantity: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;