import mongoose from "mongoose";
import dbConnect from '../../../config/dbconfig';
import Product from "../../../models/Product";

export default async function productApi(req, res) {

    const {method} = req;
    const {id} = req.query;
    dbConnect();

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
                console.log(err.message);
                res.status(500).json(err.message);
            }

            break;
        }
        default:
            break;
    }
}