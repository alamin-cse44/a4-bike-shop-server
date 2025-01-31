import { StatusCodes } from 'http-status-codes';
import QeryBuilder from '../../builder/QeryBuilder';
import AppError from '../../errors/AppError';
import { ICart } from './cart.interface';
import { Cart } from './cart.model';
import { orderSearchableFields } from './cart.constant';
import { Order } from '../order/order.model';
import { IOrder } from '../order/order.interface';

const createCartIntoDB = async (payload: ICart) => {
  const { userEmail, product } = payload;

  const existingCartItem = await Cart.findOne({ userEmail, product });

  if (existingCartItem) {
    existingCartItem.quantity += 1;
    await existingCartItem.save();
    console.log('Cart item quantity updated successfully');

    return existingCartItem;
  }

  const result = await Cart.create(payload);

  return result;
};

const getAllOrdersFromDB = async (query: Record<string, unknown>) => {
  // const queryObj = { ...query };

  // TODO: Populate
  const orderQuery = new QeryBuilder(
    Order.find().populate('customer').populate('product'),
    query,
  )
    .search(orderSearchableFields)
    .filter()
    .sort()
    .sortByAscOrDesc()
    .paginate()
    .fields();

  const result = await orderQuery.modelQuery;

  return result;
};

const getOrderByIdFromDB = async (id: string) => {
  const result = await Order.findById(id);

  return result;
};

const updateOrderByIdIntoDB = async (id: string, payload: Partial<IOrder>) => {
  // check if bike exists by id
  const order = await Order.isOrderExistById(id);

  if (!order) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Order not found');
  }

  // TODO: check orderer ==== order updater

  // update the blog
  const result = await Order.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteOrderByIdFromDB = async (id: string) => {
  // check if bike exists by id
  const order = await Order.isOrderExistById(id);

  if (!order) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Order not found');
  }

  // delete the blog
  const result = await Order.findByIdAndDelete(id);

  return result;
};

export const CartServices = {
  createCartIntoDB,
  // getAllOrdersFromDB,
  // getOrderByIdFromDB,
  // updateOrderByIdIntoDB,
  // deleteOrderByIdFromDB,
};
