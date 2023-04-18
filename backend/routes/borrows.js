import express from "express";

import {
  createBorrow,
  getAllBorrow,
  getBorrow,
} from "../controllers/borrowController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();
router.post("/", verifyUser, createBorrow);
router.get("/:id", verifyUser, getBorrow);
router.get("/", verifyAdmin, getAllBorrow);

export default router;
