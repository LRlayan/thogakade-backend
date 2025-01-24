import {PrismaClient} from '@prisma/client';
import Item from "../model/Item";

const prisma = new PrismaClient();

export async function ItemAdd(i: Item) {
    try {
        const newItem = await prisma.item.create({
            data:{
                itemId: i.itemId,
                name: i.name,
                quantity: i.quantity,
                price: i.price
            }
        });
    } catch (e) {
        console.log("error adding item");
    }
}

export async function ItemUpdate(i: Item) {
    try {
        const updateItem = await prisma.item.update({
            where:{itemId: i.itemId},
            data:{
                name: i.name,
                quantity: i.quantity,
                price: i.price
            }
        });
    } catch (e) {
        console.log("error updating item",e);
    }
}

export async function ItemDelete(itemId: string) {
    try {
        const deleteItem = await prisma.item.delete({
            where:{itemId: itemId}
        });
    } catch (e) {
        console.log("error deleting item",e);
    }
}