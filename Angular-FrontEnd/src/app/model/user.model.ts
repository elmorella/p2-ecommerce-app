import { MyAddress } from "./my-address.model";
import { OrderReceipt } from "./order-receipt.model";

export class User {
    public id?: number
    public name?: String
    public username?: String
    public email?: String
    public password?: String
    public orderReceipts?: Array<OrderReceipt>
    public myAddress?: MyAddress
}