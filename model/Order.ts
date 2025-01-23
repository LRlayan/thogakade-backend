class Order {
    orderId: number;
    customerId:number;
    orderDate:Date;
    orderDetails: OrderDetails[];

    constructor(orderId: number, customerId: number, orderDate: Date, orderDetails: OrderDetails[]) {
        this.orderId = orderId;
        this.customerId = customerId;
        this.orderDate = orderDate;
        this.orderDetails = orderDetails;
    }
}