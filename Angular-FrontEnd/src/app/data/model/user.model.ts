import { IOrderReceipt } from "./order-receipt.model";

export interface IUser{
    userId: Number;
    name: String;
    username: String;
    email: String;
    password: String;
    orderReceipts: Array<IOrderReceipt>;
}