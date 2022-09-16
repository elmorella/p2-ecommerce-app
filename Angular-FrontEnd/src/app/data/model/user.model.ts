import { OrderReceipt } from "./order-receipt.model";

export class User{
    userId?: Number;
    name?: String;
    username?: String;
    email?: String;
    password?: String;
    orderReceipts?: Array<OrderReceipt>;
}