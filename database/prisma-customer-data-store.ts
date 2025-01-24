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
        });
    } catch (e) {
        console.log("error adding customer ", e)
    }
}

export async function CustomerUpdate(c: Customer) {
    try {
        const updateCustomer = await prisma.customer.update({
            where:{customerId: c.customerId},
            data:{
                name: c.name,
                address: c.address,
                email: c.email
            }
        });
    } catch (e) {
        console.log("error updating customer ",e);
    }
}

export async function DeleteCustomer(customerId: string) {
    try {
        const deleteCustomer = await prisma.customer.delete({
            where:{customerId: customerId}
        });
    } catch (e) {
        console.log("error deleting customer",e)
    }
}

export async function GetAllCustomers() {
    try {
        return await prisma.customer.findMany();
    } catch (e) {
        console.log("get customers is failed!",e);
    }
}