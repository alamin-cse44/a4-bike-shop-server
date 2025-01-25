import { Model, Types } from 'mongoose';
import { IUser } from '../user/user.interface';
import { IBike } from '../bike/bike.interface';

export interface IOrder {
  customer: Types.ObjectId | IUser;
  product: Types.ObjectId | IBike;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'delivered' | 'cancel';
  quantity: number;
}

export interface OrderModel extends Model<IOrder> {
  isOrderExistById(id: string): Promise<IOrder>;
}
