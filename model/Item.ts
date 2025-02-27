import OrderDetails from "./OrderDetails";

class Item{
    id:string;
    itemId: string;
    name:string;
    quantity:number;
    price:number;
    orderDetails: OrderDetails[];

    constructor(id: string, itemId:string, name: string, quantity: number, price: number, orderDetails: OrderDetails[]) {
        this.id = id;
        this.itemId = itemId;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.orderDetails = orderDetails;
    }
}

export default Item;