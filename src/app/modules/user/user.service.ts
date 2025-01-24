import { IUser } from './user.interface';
import { User } from './user.model';

const registerUserIntoDB = async (payload: IUser) => {
  const result = await User.create(payload);

  return result;
};

const getSignleUserByIdFromDB = async (id: string) => {
  const result = await User.findById(id);

  return result;
};

const getAllUsersFromDB = async () => {
  const result = await User.find({});

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
