const User = require('../models/User');

const getAllUsers = async () => {
    try{
        const users = await User.find();
        return users;
    } catch (error) {
        throw new Error("Failed to fetch users");
    }
}

const getUserById = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    throw new Error('Failed to fetch user');
  }
};

const createUser = async (userData) => {
  try {
    const user = new User(userData);
    await user.save();
    return user;
  } catch (error) {
    throw new Error('Failed to create user');
  }
};

const updateUser = async (id, userData) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(id, userData, { new: true });
    return updatedUser;
  } catch (error) {
    throw new Error('Failed to update user');
  }
};

const deleteUser = async (id) => {
  try {
    await User.findByIdAndDelete(id);
    return { message: 'User deleted successfully' };
  } catch (error) {
    throw new Error('Failed to delete user');
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
