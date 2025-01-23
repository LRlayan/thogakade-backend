import Orders from "./Order";

class Customer{
    id:number;
    customerId:string;
    name:string;
    address:string;
    email:string;
    orders:Orders[];

    constructor(id: number, customerId: string, name: string, address: string, email: string, orders: Orders[]) {
        this.id = id;
        this.customerId = customerId;
        this.name = name;
        this.address = address;
        this.email = email;
        this.orders = orders;
    }
}

export default Customer;