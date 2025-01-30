import { Model, Types } from 'mongoose';
import { IUser } from '../user/user.interface';
import { IBike } from '../bike/bike.interface';

export interface ICart {
  customer: Types.ObjectId | IUser;
  product: Types.ObjectId | IBike;
  quantity: number;
}

export interface CartModel extends Model<ICart> {
  isCartExistById(id: string): Promise<ICart>;
}
