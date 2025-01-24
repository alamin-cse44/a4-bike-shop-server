import { Router } from 'express';
import { UserRouters } from '../modules/user/user.route';
import { AdminRouters } from '../modules/admin/admin.route';
import { AuthRouters } from '../modules/auth/auth.route';
import { BikeRouters } from '../modules/bike/bike.route';

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
    path: '/bikes',
    route: BikeRouters,
  },
  {
    path: '/admin',
    route: AdminRouters,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
