import { Item } from "./item.model";
import { User } from "./user.model";

export class OrderReceipt {
    id?: number
    // user?: User
    userId?: number
    orderDate?: Date
    items: Item[] = [];
    cardQuantity: Map<string,number> = new Map();
}