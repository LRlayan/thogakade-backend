import express from "express";
import Customer from "../model/Customer";
import {CustomerAdd, CustomerUpdate, DeleteCustomer, GetAllCustomers} from "../database/prisma-data-store";
import customer from "../model/Customer";

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

CustomerRouter.put('/update/:id', async (req,res) => {
    const customer = req.body;
    const id = req.params;
    try {
        const updateCustomer = new Customer(0,customer.customerId,customer.name,customer.address,customer.email,[]);
        await CustomerUpdate(updateCustomer);
    } catch (e) {
        console.log("update customer is failed!",e);
        res.status(400).send("Failed to update customer, Please try again");
    }
});

CustomerRouter.delete('/delete/:id', async (req,res) => {
    const customerId = req.params.id;
    try {
        await DeleteCustomer(customerId);
    } catch (e) {
        console.log("Failed to delete customer!", e);
    }
});