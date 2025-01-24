import express from "express";
import Item from "../model/Item";
import {ItemAdd, ItemUpdate} from "../database/prisma-item-data-store";
import {it} from "node:test";

export const ItemRoutes = express.Router();

ItemRoutes.post('/post', async (req, res) => {
    const item : Item = req.body;
    try {
        const newItem = new Item(item.id,item.itemId,item.name,item.quantity,item.price,[]);
        await ItemAdd(newItem);
    } catch (e) {
        console.log("error save items",e);
        res.status(400).send('Failed to saved item, Please try again');
    }
})

ItemRoutes.put('/update/:id',async (req,res) => {
    const id = req.params.id;
    const item = req.body;
    try {
        const updateItem = new Item(item.id,item.itemId,item.name,item.quantity,item.price,[]);
        await ItemUpdate(updateItem);
    } catch (e) {
        console.log("error update items",e);
        res.status(400).send('Failed to update item, Please try again');
    }
});