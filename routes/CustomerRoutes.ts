import express from "express";
import Customer from "../model/Customer";
import {CustomerAdd} from "../database/prisma-data-store";

export const CustomerRouter = express.Router();

CustomerRouter.post('/post', async (req,res) => {
    const customer : Customer = req.body;
    try {
        const newCustomer = new Customer(1,customer.customerId, customer.name, customer.address, customer.email, customer.orders);
        await CustomerAdd(newCustomer);
    } catch (e) {
        console.log("error adding customer",e);
        res.status(400).send("Failed to saved customer, Please try again");
    }
})