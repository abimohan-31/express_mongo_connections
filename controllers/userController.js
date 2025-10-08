import User from "../models/Users.js";

// get all users

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.error.status(500).json({ error: error });
  }
};

export const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const users = await User.findByIdAndDelete(userId);
    if (!users) return res.status(404).json({ Message: "User not found" });
    res.send(users);
  } catch (error) {
    res.error.status(500).json({ error: error });
  }
};

export const createUser = async (req, res) => {
  try {
    const newUser = req.body;

    const emailCheck = users.find((user) => user.email === email);
    if (emailCheck)
      return res.status(404).json({ error: "Email already exit" });
    const savedUser = await new User.save(newUser);
    res
      .status(201)
      .json({ Message: "User created successfully", user: savedUser });
  } catch (error) {
    res.error.status(500).json({ error: error });
  }
};
