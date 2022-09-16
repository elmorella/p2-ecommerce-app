import { Item } from "./item.model";
import { IUser } from "./user.model";

export interface IOrderReceipt {
    id: Number;
    user: IUser;
    items: Array<Item>;
}