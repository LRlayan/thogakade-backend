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