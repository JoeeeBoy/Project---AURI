const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    brand: {
        ref: 'Brand',
        type: mongoose.SchemaType.ObjectId
    },
    price: Number,
    reviews: {
        ref: 'Review',
        type: mongoose.SchemaType.ObjectId
    },
    category: {
        ref: 'Category',
        type: mongoose.SchemaType.ObjectId
    },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;