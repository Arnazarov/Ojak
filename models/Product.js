import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: [Number],
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    meat: {
        type: [String]
    }
}, {timestamps: true});

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);