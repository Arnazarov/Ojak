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

const Product = mongoose.model('Product', productSchema);

export default Product;