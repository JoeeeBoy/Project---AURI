const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: String,
    brand: {
        ref: 'Brand',
        type: mongoose.SchemaType.ObjectId
    },
    reviews: {
        ref: 'Review',
        type: mongoose.SchemaType.ObjectId
    },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
