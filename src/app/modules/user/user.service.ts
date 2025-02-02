import QeryBuilder from '../../builder/QeryBuilder';
import { userSearchableFields } from './user.constant';
import { IUser } from './user.interface';
import { User } from './user.model';

const registerUserIntoDB = async (payload: IUser) => {
  const result = await User.create(payload);

  return result;
};

const getSignleUserByIdFromDB = async (email: string) => {
  const result = await User.findUserByEmail(email);

  return result;
};

const getAllUsersFromDB = async (query: Record<string, unknown>) => {
  const userQuery = new QeryBuilder(User.find(), query)
    .search(userSearchableFields)
    .filter()
    .sort()
    .sortByAscOrDesc()
    .paginate()
    .fields();

  const result = await userQuery.modelQuery;

  return result;
};

const getMeService = async (email: string, role: string) => {
  const result = await User.findUserByEmail(email);

  return result;
};

// const changeStatus = async (id: string, payload: { status: string }) => {
//   const result = await User.findByIdAndUpdate(id, payload, {
//     new: true,
//   });
//   return result;
// };

export const UserServices = {
  registerUserIntoDB,
  getSignleUserByIdFromDB,
  getAllUsersFromDB,
  getMeService,
  // changeStatus,
};
