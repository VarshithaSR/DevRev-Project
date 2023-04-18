import express from "express";
import {
  createBook,
  deleteBook,
  getAllBook,
  getFeaturedBook,
  getSingleBook,
  getBookBySearch,
  updateBook,
  getBookCount,
} from "../controllers/bookController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

// create new Book

router.post("/", verifyAdmin, createBook);

// update new Book

router.put("/:id", verifyAdmin, updateBook);

// delete new Book

router.delete("/:id", verifyAdmin, deleteBook);

// get single new Book

router.get("/:id", getSingleBook);

// getAll new Book

router.get("/", getAllBook);

//get Book by search

router.get("/search/getBookBySearch", getBookBySearch);

router.get("/search/getFeaturedBooks", getFeaturedBook);

router.get("/search/getBookCount", getBookCount);

export default router;
