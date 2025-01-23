import express from "express";
import Customer from "../model/Customer";
import {CustomerAdd, GetAllCustomers} from "../database/prisma-data-store";

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
});

CustomerRouter.get('/getAll', async (req,res) => {
    try {
        const getAllCustomers = await GetAllCustomers();
        res.json(getAllCustomers);
    } catch (e) {
        console.log("getAll customers is failed!",e);
    }
});