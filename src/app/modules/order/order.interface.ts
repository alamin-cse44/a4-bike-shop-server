import { Types } from "mongoose";

export interface IOrder {
    customer: Types.ObjectId;
    product: Types.ObjectId;
    totalPrice: number;
    status: 'pending' | 'confirmed' | 'delivered'| 'cancel';
    quantity: number;
}