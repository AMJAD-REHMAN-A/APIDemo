const userService = require('../services/userService');

const getUser = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Server Error1' });
  }
};

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await userService.createUser(userData);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: 'Invalid Data' });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userData = req.body;
    const updatedUser = await userService.updateUser(id, userData);
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: 'Invalid Data' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletionResult = await userService.deleteUser(id);
    res.json(deletionResult);
  } catch (error) {
    res.status(400).json({ error: 'Invalid Data' });
  }
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser
};
