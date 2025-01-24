import express from "express";
import Item from "../model/Item";
import {ItemAdd} from "../database/prisma-item-data-store";

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