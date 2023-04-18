import Book from "../models/Book.js";

//create new Book

export const createBook = async (req, res) => {
  const newBook = new Book(req.body);
  try {
    const savedBook = await newBook.save();
    res.status(200).json({
      success: true,
      message: "successfully created",
      data: savedBook,
    });
  } catch (err) {
    const savedBook = await newBook.save();
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again" });
  }
};

//update Book
export const updateBook = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "successfully updated",
      data: updatedBook,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "failed to update" });
  }
};

//delete Book
export const deleteBook = async (req, res) => {
  const id = req.params.id;
  try {
    await Book.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "successfully deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: "failed to delete" });
  }
};

//getSingle Book
export const getSingleBook = async (req, res) => {
  const id = req.params.id;
  try {
    const Book = await Book.findById(id);
    res
      .status(200)
      .json({ success: true, message: "successfully deleted", data: Book });
  } catch (err) {
    res.status(404).json({ success: false, message: "not found" });
  }
};

//getAll Book
export const getAllBook = async (req, res) => {
  //for pagination

  const page = parseInt(req.query.page);

  try {
    const Books = await Book.find({})
      .skip(page * 8)
      .limit(8);
    res.status(200).json({
      success: true,
      count: Books.length,
      message: "successful",
      data: Books,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "not found" });
  }
};

//get Book by search

export const getBookBySearch = async (req, res) => {
  const title = new RegExp(req.query.title, "i"); //here i means case sensitive
  const author = new RegExp(req.query.author, "i");
  const publish_date = new RegExp(req.query.publish_date, "i");

  try {
    //gte means greater than equal
    const Books = await Book.find({
      title,
      author,
      publish_date,
    });

    res.status(200).json({
      success: true,
      count: Books.length,
      message: "successful",
      data: Books,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "not found" });
  }
};

//get featured Book
export const getFeaturedBook = async (req, res) => {
  try {
    const Books = await Book.find({ featured: true }).limit(8);
    res.status(200).json({
      success: true,
      message: "successful",
      data: Books,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "not found" });
  }
};

//get Book counts
export const getBookCount = async (req, res) => {
  try {
    const BookCount = await Book.estimatedDocumentCount();
    res.status(200).json({ success: true, data: BookCount });
  } catch (err) {
    res.status(500).json({ success: false, message: "failed to fetch" });
  }
};
