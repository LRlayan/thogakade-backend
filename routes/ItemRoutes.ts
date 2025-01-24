import express from "express";
import Item from "../model/Item";
import {GetAllItems, ItemAdd, ItemDelete, ItemUpdate} from "../database/prisma-item-data-store";
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

ItemRoutes.put('/update/:itemId',async (req,res) => {
    const itemId = req.params.itemId;
    const item = req.body;
    try {
        const updateItem = new Item(item.id,itemId,item.name,item.quantity,item.price,[]);
        await ItemUpdate(updateItem);
    } catch (e) {
        console.log("error update items",e);
        res.status(400).send('Failed to update item, Please try again');
    }
});

ItemRoutes.delete('/delete/:itemId', async (req,res) => {
    const itemId = req.params.itemId;
    try {
        await ItemDelete(itemId);
    } catch (e) {
        console.log("error delete items",e);
        res.status(400).send('Failed to delete item, Please try again');
    }
});

ItemRoutes.get('/getAll',async (req,res) => {
    try {
        await GetAllItems();
    } catch (e) {
        console.log("error getAll items",e);
        res.status(400).send('Failed to get items, Please try again');
    }
});