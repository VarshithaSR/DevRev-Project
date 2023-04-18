import Borrow from "../models/Borrow.js";

//create new booking

export const createBorrow = async (req, res) => {
  const newBorrow = new Borrow(req.body);
  try {
    const savedBorrow = await newBorrow.save();
    res.status(200).json({
      success: true,
      message: "Your tour is booked",
      data: savedBorrow,
    });
  } catch (err) {
    res.status(500).json({ success: true, message: "Internal Server Error" });
  }
};

//get single booking
export const getBorrow = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Borrow.findById(id);

    res.status(200).json({
      success: true,
      message: "Successfull",
      data: book,
    });
  } catch (err) {
    res.status(404).json({ success: true, message: "Not found" });
  }
};

//get all booking
export const getAllBorrow = async (req, res) => {
  try {
    const books = await Borrow.find();

    res.status(200).json({
      success: true,
      message: "Successfull",
      data: books,
    });
  } catch (err) {
    res.status(500).json({ success: true, message: "Internal Server Error" });
  }
};
