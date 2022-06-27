const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: String,
    basket: {
        ref: "Basket",
        type: mongoose.SchemaTypes.ObjectId
    },
    wallet: {
        default: 0,
        type: Number
    },
});

const User = mongoose.model("User", userSchema);
module.exports = User;