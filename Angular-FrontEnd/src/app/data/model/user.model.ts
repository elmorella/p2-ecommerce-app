import { OrderReceipt } from "./order-receipt.model";

export class User {
    public userId?: Number
    public name?: String
    public username?: String
    public email?: String
    public password?: String
    public orderReceipts?: Array<OrderReceipt>
}