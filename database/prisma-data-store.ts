import {PrismaClient} from '@prisma/client';
import Customer from "../model/Customer";
import * as perf_hooks from "perf_hooks";

const prisma = new PrismaClient();

export async function CustomerAdd(c: Customer) {
    try {
        const newCustomer = await prisma.customer.create({
            data:{
                customerId: c.customerId,
                name: c.name,
                address: c.address,
                email: c.email,
            }
        })
    } catch (e) {
        console.log("error adding customer ", e)
    }
}