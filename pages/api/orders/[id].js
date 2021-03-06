import mongoose from "mongoose";
import dbConnect from '../../../config/dbconfig';
import Order from "../../../models/Order";

export default async function orderApi(req, res) {
    dbConnect();    
    const {method, body, cookies, query: {id}} = req;
    const {token} = cookies;
    switch (method) {
        case "GET": {
            try {
                const order = await Order.findById(id);

                if (order) {
                    res.status(200).json(order);
                } else {
                    res.status(404).json('Product not found');  
                }
            } catch(err) {
                console.log(err.message);
                res.status(500).json(err.message);
            }

            break;
        }
        case "PUT": {

            try {            
                const updatedOrder = await Order.findByIdAndUpdate(id, body, {new: true});
                res.status(200).json(updatedOrder);

            } catch(err) {
                res.status(500).json(err.message);
            }

            break;
        }
        default:
            break;
    }
}