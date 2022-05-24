import mongoose from "mongoose";
import dbConnect from '../../../config/dbconfig';
import Product from "../../../models/Product";


const productsAPI = async (req, res) => {
    dbConnect();
    const {method, cookies} = req;
    const {token} = cookies;


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

            if (!token || token !== process.env.NEXT_PUBLIC_TOKEN) {
                return res.status(401).json('Not authenticated!');
            } else {
                try {
                    const product = await Product.create(req.body);
                    res.status(201).json(product);
                } catch (error) {
                    res.status(500).json({message: error.message});
                }
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