const mongoose = require("mongoose")
const { Schema } = mongoose;

const productSchema = new Schema({
    imageUrl: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true }

}, { versionKey: false, timestamps: true });

const productModel = mongoose.model("products", productSchema)

module.exports = productModel