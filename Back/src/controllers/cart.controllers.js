import { Cart } from "../models/cart.model.js";
import { Book } from "../models/book.model.js";

export const getBooksOnCart = async (req, res) => {
  const booksCart = await Cart.find();
  try {
    if (booksCart) {
      res.status(201).json({ booksCart });
    } else {
      res.status(202).send("No hay productos en el carrito");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const addBookToCart = async (req, res) => {
  try {
    const { title, image, price } = req.body;
    /* Nos fijamos si tenemos el libro */
    const estaEnBooks = await Book.findOne({ title });
    /* Nos fijamos si tenemmos stock */
    const hayStock = estaEnBooks.stock > 0;
    /* Nos fijamos si el libro ya esta en el carrito */
    const estaEnElCarrito = await Cart.findOne({ title });
    /* Si hay stock y no esta en el carrito lo agregamos */
    if (hayStock && !estaEnElCarrito) {
      const newBookInCart = new Cart({ title, image, price, amount: 1 });
      /* Y actualizamos la prop inCart: true en nuestros libros */
      await Book.findByIdAndUpdate(
        estaEnBooks?._id,
        { inCart: true, title, image, price },
        { new: true }
      )
        .then((book) => {
          newBookInCart.save();
          res.status(201).json({
            mensaje: `El producto fue agregado al carrito`,
            book,
          });
        })
        .catch((error) => console.error(error));

      /* Y si esta en el carrito o no tenemos stock avisamos */
    } else if (estaEnElCarrito) {
      res.status(400).json({
        mensaje: "El producto ya esta en el carrito",
      });
    } else {
      res.status(400).json({
        mensaje: "Lo siento nos quedamos sin Stock",
      });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteBookOnCart = async (req, res) => {
  try {
    const bookId = req.params.id;
    console.log(bookId);
    /* Buscamos el libro en el carrito */
    const bookInCart = await Cart.findById(bookId);
    /* Buscamos el libro en nuestra DB por el nombre del que esta en el carrito */
    const { title, image, price, _id } = await Book.findOne({
      title: bookInCart.title,
    });
    /* Buscamos y eliminamos el libro con la id */
    await Cart.findByIdAndDelete(bookId);

    /* Buscamos y editamos la prop inCart: false */
    /* Le pasamos la id del libro en la DB */
    /* La prop a cambiar y las demas */
    await Book.findByIdAndUpdate(
      _id,
      { inCart: false, title, image, price },
      { new: true }
    ).then((book) => {
      res.status(201).json({
        mensaje: `El libro '${book.title}' fue eliminado del carrito`,
      });
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateBookOnCart = async (req, res) => {
  try {
    const bookId = req.params.id;
    const { query } = req.query;
    const body = req.body;

    /* Buscamos el libro en el carrito */
    const libroBuscado = await Cart.findById(bookId);

    /* Si no hay query 'add' o 'del' */
    if (!query) {
      res.status(404).json({ mensaje: "Debes enviar una query" });

      /* Si esta el libro en el carrito y quiero agregar */
    } else if (libroBuscado && query === "add") {
      body.amount = body.amount + 1;

      await Cart.findByIdAndUpdate(bookId, body, {
        new: true,
      }).then((book) => {
        res.json({
          mensaje: `El Libro: '${book.title}' fue actualizado`,
          book,
        });
      });

      /* Si esta el libro en el carrito y quiero sacar */
    } else if (libroBuscado && query === "del") {
      body.amount = body.amount - 1;

      await Cart.findByIdAndUpdate(bookId, body, {
        new: true,
      }).then((book) =>
        res.json({
          mensaje: `El Libro: '${book.title}' fue actualizado`,
          book,
        })
      );
    } else {
      res.status(400).json({ mensaje: "Ocurrio un error" });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};
