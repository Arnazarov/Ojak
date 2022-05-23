import mongoose from "mongoose";
import dbConnect from '../../../config/dbconfig';
import Product from "../../../models/Product";


const productsAPI = async (req, res) => {
    dbConnect();
    const {method} = req;
    switch (method) {
        case "GET": {
            try {
                const products = await Product.find();
                res.status(200).json(products);
            } catch (error) {
                res.status(500).json({message: error.message});
            }
            break;
        }
        case "POST": {
            try {
                const product = await Product.create(req.body);
                res.status(201).json(product);
            } catch (error) {
                res.status(500).json({message: error.message});
            }
            break;
        }
        default: {
            res.json('No method specified');
            break;
        }
    }
}

export default productsAPI;