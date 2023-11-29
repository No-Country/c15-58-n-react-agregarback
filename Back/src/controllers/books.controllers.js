import { Book } from "../models/book.model.js";

export const getAllBooks = async (req, res) => {
  try {
    const result = await Book.find({});

    res.status(201).json(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const postBook = async (req, res) => {
  try {
    const data = req.body;
    const newBook = new Book(data);

    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateBook = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    await Book.updateOne(
      { _id: id },
      {
        $set: data,
      }
    );
    res.status(201).send("EL libro ha sido modificado con exito");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getBookById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Book.find({ _id: id });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).send(`No existe un libro con ese ID`);
  }
};

export const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;

    await Book.deleteOne({ _id: id });
    res.status(200).send("El libro fue eliminado con exito");
  } catch (error) {
    res.status(400).send(`No existe un libro con ese ID`);
  }
};
