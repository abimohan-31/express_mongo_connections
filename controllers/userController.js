import User from "../models/Users.js";

// get all users

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

//create user
export const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();

    res
      .status(200)
      .json({ Message: "User created successfully", User: savedUser });
  } catch (error) {
    res.status(500).json({ Error: "Internal server error" });
  }
};

// create book
export const createBook = async (req, res) => {
  try {
    const newUser = new User(req.body);

    const savedUser = await newUser.save();
    res
      .status(200)
      .json({ Message: "user created successfully", user: savedUser });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

// delete user
export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const users = await User.findByIdAndDelete(userId);
    if (!users) return res.status(404).json({ Message: "User not found" });
    res.send(users);
  } catch (error) {
    res.status(500).json({ error: error.message || error });
  }
};
