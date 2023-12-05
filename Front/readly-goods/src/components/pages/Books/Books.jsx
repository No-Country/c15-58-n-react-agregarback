import { useEffect, useState } from "react";
import Card from "./BooksComponents/Card";

const Books = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetch("https://c15-58-readlygoods-three.vercel.app/books")
      .then((res) => res.json())
      .then((data) => setBooks(data.allBooks));
  }, []);

  const getAllGenre = () => {
    const genres = books?.map((book) => book.genre);
    const allGenres = [...new Set(genres)];
    return allGenres.map((genre) => (
      <p className="text-gray-500" key={genre}>
        {genre}
      </p>
    ));
  };

  const getAllEditorial = () => {
    const editorials = books?.map((book) => book.editorial);
    const allEditorials = [...new Set(editorials)];
    return allEditorials.map((editorial) => (
      <p className="text-gray-500" key={editorial}>
        {editorial}
      </p>
    ));
  };

  const getAllAuthor = () => {
    const Authors = books?.map((book) => book.author);
    const AllAuthor = [...new Set(Authors)];
    return AllAuthor.map((author) => (
      <p className="text-gray-500" key={author}>
        {author}
      </p>
    ));
  };

  return (
    <main className="flex flex-col w-3/5 gap-6 m-auto my-12">
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-semibold uppercase">Productos</h1>
        <p className="text-sm text-gray-500">
          {books ? books.length : 0} articulos
        </p>
      </div>
      <hr />

      <div className="w-full flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-1">
        <aside className="w-full md:sticky md:block">
          <h4 className="text-lg font-semibold">Género</h4>
          <div className="flex flex-col gap-2 py-2 my-2 overflow-auto text-sm">
            {books && getAllGenre()}
          </div>
          <h4 className="text-lg font-semibold">Editorial</h4>
          <div className="flex flex-col h-32 gap-2 py-2 my-2 overflow-auto text-sm">
            {books && getAllEditorial()}
          </div>
          <h4 className="text-lg font-semibold">Autor</h4>
          <div className="flex flex-col h-48 gap-2 py-2 my-2 overflow-auto text-sm">
            {books && getAllAuthor()}
          </div>
        </aside>
        <div className="grid w-full grid-cols-1 gap-4 m-auto md:grid-cols-3">
          {books &&
            books.map(({ _id, image, title, price }) => (
              <Card image={image} title={title} price={price} id={_id} key={_id} />
            ))}
        </div>
      </div>
    </main>
  );
};

export default Books;
