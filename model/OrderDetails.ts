class OrderDetails {
    orderDetailId: number;
    orderId: number;
    itemId: number;
    quantity: number;
    price : number;

    constructor(orderDetailId: number, orderId: number, itemId: number, quantity: number, price: number) {
        this.orderDetailId = orderDetailId;
        this.orderId = orderId;
        this.itemId = itemId;
        this.quantity = quantity;
        this.price = price;
    }
}

export default OrderDetails;