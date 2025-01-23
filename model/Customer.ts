import {Orders} from "@prisma/client";

class Customer{
    id:string;
    name:string;
    nic:string;
    email:string;
    phone:string;
    orders:Orders[];

    constructor(id: string, name: string, nic: string, email: string, phone: string, orders: Orders[]) {
        this.id = id;
        this.name = name;
        this.nic = nic;
        this.email = email;
        this.phone = phone;
        this.orders = orders;
    }
}