import { Router } from 'express';
import { UserRouters } from '../modules/user/user.route';
import { AdminRouters } from '../modules/admin/admin.route';
import { AuthRouters } from '../modules/auth/auth.route';
import { BikeRouters } from '../modules/bike/bike.route';
import { OrderRouters } from '../modules/order/order.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRouters,
  },
  {
    path: '/auth',
    route: AuthRouters,
  },
  {
    path: '/admin',
    route: AdminRouters,
  },
  {
    path: '/bikes',
    route: BikeRouters,
  },
  {
    path: '/orders',
    route: OrderRouters,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
