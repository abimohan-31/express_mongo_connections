import express from "express";

import {
  createUser,
  getAllUsers,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getAllUsers);
router.delete("/:id", deleteUser);
router.post("/", createUser);

export default router;
