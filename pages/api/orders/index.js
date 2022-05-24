import mongoose from "mongoose";
import dbConnect from '../../../config/dbconfig';
import Order from "../../../models/Order";


const ordersAPI = async (req, res) => {

    const {method, cookies} = req;
    const {token} = cookies;
    dbConnect();
    switch (method) {
        case "GET": {
            try {
                const orders = await Order.find();
                res.status(200).json(orders);
            } catch (error) {
                res.status(500).json({message: error.message});
            }
            break;
        }
        case "POST": {
            if (!token || token !== process.env.TOKEN) {
                return res.status(401).json('Not authenticated!');
            }

            try {
                const order = await Order.create(req.body);
                res.status(201).json(order);
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

export default ordersAPI;