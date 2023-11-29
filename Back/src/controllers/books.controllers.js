import { Book} from "../models/book.model";

export const postBook = (req, res) => {
  const data = req.body;
  const book = new Book(data);
  book
    .save()
    .then((savedBook) => {
      res.status(200).json(savedBook);
    })
    .catch((err) => {
      res.status(400).send("Verifique que todos los datos esten completos o que el libro no exista ya en la Base de Datos");
    });
};

export const getAllBooks = (req, res) => {
  Book.find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

export const updateBook = (req, res) => {
  const id = req.params.id;
  console.log(id)
  const data = req.body;
  console.log(data)
  Book.updateOne(
    { _id: id },
    {
      $set: data,
    }
  )
  .then((result) => {
    res.status(200).send("EL libro ha sido modificado con exito");
  })
  .catch((err) => {
    res.status(400).send(err);
  });
};

export const getBookById = (req, res) => {
  const id = req.params.id;
  Book.find({ _id: id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

export const deleteBook = (req, res) => {
    const id = req.params.id;
    console.log(id)
    Book.deleteOne({_id: id})
    .then((result) => {
        res.status(200).send("El libro fue eliminado con exito");
      })
      .catch((err) => {
        res.status(400).send(`El libro con el ID: ${id} no existe`);
      });
}