import mongoose from "mongoose";
import dbConnect from '../../../config/dbconfig';
import Product from "../../../models/Product";
dbConnect();
export default async function productApi(req, res) {

    const {method} = req;
    const {id} = req.query;

    switch (method) {
        case "GET": {
            try {
                const product = await Product.findById(id);

                if (product) {
                    res.status(200).json(product);
                } else {
                    res.status(404).json('Product not found');  
                }
            } catch(err) {
                res.status(500).json(err.message);
            }

            break;
        }
        case "DELETE": {
            try {
                const product = await Product.findById(id);

                if (product) {
                    product.remove();
                    res.status(200).json({message: 'Product deleted!'});
                } else {
                    res.status(404).json('Product not found');  
                }
            } catch(err) {
                res.status(500).json(err.message);
            }

            break;
        }
        default:
            break;
    }
}