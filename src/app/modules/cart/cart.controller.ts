import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { OrderServices } from '../order/order.service';
import { CartServices } from './cart.service';

const createCart = catchAsync(async (req, res) => {
  const result = await CartServices.createCartIntoDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Cart is created successfully',
    data: result,
  });
});

const getAllOrders = catchAsync(async (req, res) => {
  const result = await OrderServices.getAllOrdersFromDB(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Orders are retrieved successfully',
    data: result,
  });
});

const getOrderById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await OrderServices.getOrderByIdFromDB(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Order is retrieved successfully',
    data: result,
  });
});

const updateOrderById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await OrderServices.updateOrderByIdIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Order is updated successfully',
    data: result,
  });
});

const deleteOrderById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await OrderServices.deleteOrderByIdFromDB(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Order is deleted successfully',
    data: result,
  });
});

export const CartControllers = {
  createCart,
  // getAllOrders,
  // getOrderById,
  // updateOrderById,
  // deleteOrderById,
};
