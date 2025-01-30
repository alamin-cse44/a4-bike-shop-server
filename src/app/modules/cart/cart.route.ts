import express from 'express';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';
import { OrderControllers } from './cart.controller';

const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.admin, USER_ROLE.customer),
  //   validateRequest(BikeValidations.createBikeValidaitonSchema),
  OrderControllers.createCart,
);

router.get(
  '/',
  auth(USER_ROLE.admin, USER_ROLE.customer),
  OrderControllers.getAllOrders,
);

router.get(
  '/:id',
  auth(USER_ROLE.admin, USER_ROLE.customer),
  OrderControllers.getOrderById,
);

router.patch(
  '/:id',
  auth(USER_ROLE.admin, USER_ROLE.customer),
  //   validateRequest(BikeValidations.updateBikeValidaitonSchema),
  OrderControllers.updateOrderById,
);

router.delete(
  '/:id',
  auth(USER_ROLE.admin, USER_ROLE.customer),
  OrderControllers.deleteOrderById,
);

export const CartRouters = router;
