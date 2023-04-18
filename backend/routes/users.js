import express from "express";
import {
  updateUser,
  getAllUser,
  getSingleUser,
  deleteUser,
} from "../controllers/userController.js";
const router = express.Router();

import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

// update new book

router.put("/:id", verifyUser, updateUser);

// delete new User

router.delete("/:id", verifyUser, deleteUser);

// get single new User

router.get("/:id", verifyUser, getSingleUser);

// getAll new User

router.get("/", verifyAdmin, getAllUser);

export default router;
