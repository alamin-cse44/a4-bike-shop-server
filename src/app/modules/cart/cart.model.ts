import { model, Schema } from 'mongoose';
import AppError from '../../errors/AppError';
import { StatusCodes } from 'http-status-codes';
import { BikeDocument } from '../bike/bike.interface';
import { CartModel, ICart } from './cart.interface';

const cartSchema = new Schema<ICart, CartModel>(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Bike',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

cartSchema.pre('save', async function (next) {
  try {
    // Ensure the product is found in the database
    const product = (await this.model('Bike').findById(
      this.product,
    )) as BikeDocument;

    if (!product) {
      throw new AppError(StatusCodes.NOT_FOUND, 'Product not found');
    }

    // Add quantity 
    this.quantity += 1;

    // Proceed to the next middleware or save operation
    next();
  } catch (error) {
    next();
  }
});

cartSchema.statics.isCartExistById = async function (id: string) {
  return await Cart.findById(id);
};

export const Cart = model<ICart, CartModel>('Cart', cartSchema);
