import { useEffect, useState } from "react";
import Card from "./BooksComponents/Card";
import libroSpinner from "../../../assets/spinner/libroSpinner.gif";
import { useSearchParams } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState();
  const [filteredBooks, setFilteredBooks] = useState();
  const [searchParams] = useSearchParams();
  const [queryFilter, setQueryFilter] = useState({
    genre: "",
    editorial: "",
    author: "",
    search: "",
  });
  
  const genre = searchParams.get('genre');

    let urlData = `https://c15-58-readlygoods-three.vercel.app/books/?genre=${queryFilter.genre}&editorial=${queryFilter.editorial}&author=${queryFilter.author}&search=${queryFilter.search}`;
 
  useEffect(() => {
    fetch("https://c15-58-readlygoods-three.vercel.app/books")
    .then((res) => res.json())
    .then((data) => setBooks(data.allBooks));
  }, []);
  
  useEffect(() => {
    if(genre){
      setQueryFilter({...queryFilter, genre:genre} )
      urlData = `https://c15-58-readlygoods-three.vercel.app/books/?genre=${genre}&editorial=${queryFilter.editorial}&author=${queryFilter.author}&search=${queryFilter.search}`;
    }
  }, []);

  useEffect(() => {
    fetch(urlData)
      .then((res) => res.json())
      .then((data) => setFilteredBooks(data.filteredBooks));
  }, [urlData]); 
  
  
  const handleFilterClick = (e) => {
    const { name, value } = e.target;
    if(queryFilter[name]==value){
      setQueryFilter({ ...queryFilter, [name]: "", search:"" });
    }else{
      setQueryFilter({ ...queryFilter, [name]: value, search:"" });

    }
  };
  const handlerOnChangeSearchBar = (e) => {
    const {value} = e.target
    setQueryFilter({...queryFilter, search:value} )
  }


  const getAllGenre = () => {
    const genres = books?.flatMap((book) =>
      book.genre.split(",").map((genre) => genre.trim())
    );
    const allGenres = [...new Set(genres)];
    return allGenres.map((genre) =>
      genre == queryFilter.genre ? (
        <button
          className="bg-[#822626] text-white rounded p-1 "
          key={genre}
          onClick={handleFilterClick}
          name={"genre"}
          value={genre}
        >
          {genre} 
        </button>
      ) : (
        <button
          className="text-gray-500 hover:shadow-gray-300 hover:bg-[#e9cccc] hover:shadow-md rounded p-1"
          key={genre}
          onClick={handleFilterClick}
          name={"genre"}
          value={genre}
        >
          {genre}
        </button>
      )
    );
  };

  const getAllEditorial = () => {
    const editorials = books?.map((book) => book.editorial);
    const allEditorials = [...new Set(editorials)];
    return allEditorials.map((editorial) =>
      editorial == queryFilter.editorial ? (
        <button
          className="bg-[#822626] text-white rounded p-1"
          key={editorial}
          onClick={handleFilterClick}
          name={"editorial"}
          value={editorial}
        >
          {editorial}
        </button>
      ) : (
        <button
          className="text-gray-500 hover:shadow-gray-300 hover:bg-[#e9cccc] hover:shadow-md rounded p-1"
          key={editorial}
          onClick={handleFilterClick}
          name={"editorial"}
          value={editorial}
        >
          {editorial}
        </button>
      )
    );
  };

  const getAllAuthor = () => {
    const Authors = books?.map((book) => book.author);
    const AllAuthor = [...new Set(Authors)];
    return AllAuthor.map((author) =>
      author == queryFilter.author ? (
        <button
          className="bg-[#822626] text-white rounded p-1"
          key={author}
          onClick={handleFilterClick}
          name={"author"}
          value={author}
        >
          {author}
        </button>
      ) : (
        <button
          className="text-gray-500 hover:shadow-gray-300 hover:bg-[#e9cccc] hover:shadow-md rounded p-1"
          key={author}
          onClick={handleFilterClick}
          name={"author"}
          value={author}
        >
          {author}
        </button>
      )
    );
  };

  return (
    <main className="w-full py-12 ">
      <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[65%] m-auto  flex flex-col gap-6">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-2xl font-semibold uppercase text-[#822626] w-3/6">
            Productos
          </h1>
          <p className="text-sm text-[#822626] w-1/6 font-semibold">
            {filteredBooks ? filteredBooks?.length : 0} articulos
          </p>
          <div className="flex w-2/6">

            <input value={queryFilter.search} onChange={handlerOnChangeSearchBar} type="text" placeholder="Busqueda..." className="w-full text-gray-600 border-gray-400 border-solid rounded border-1" />

          </div>
        </div>
        <hr />

        <div className="w-full flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-1">
          <aside className="w-full md:sticky md:block">
            <div className="flex flex-wrap gap-3 pb-5">
                {queryFilter.genre?<button onClick={handleFilterClick} className="bg-[#822626] px-3 py-1 text-white shadow-md shadow-slate-500 rounded flex gap-2" name="genre">{queryFilter.genre}</button>:null}
                {queryFilter.editorial?<button onClick={handleFilterClick} className="bg-[#822626] px-3 py-1 text-white shadow-md shadow-slate-500 rounded" name="editorial">{queryFilter.editorial}</button>:null}
                {queryFilter.author?<button onClick={handleFilterClick} className="bg-[#822626] px-3 py-1 text-white shadow-md shadow-slate-500 rounded" name="author">{queryFilter.author}</button>:null}
            </div>
            <h4 className="text-lg font-semibold text-[#822626] ">Género</h4>
            <div className="flex flex-col items-start gap-2 py-2 my-2 overflow-auto text-sm ">
            
              {books && getAllGenre()}
            </div>
            <h4 className="text-lg font-semibold text-[#822626]">Editorial</h4>
            <div className="flex flex-col items-start gap-2 py-2 my-2 overflow-auto text-sm">
              
              {books && getAllEditorial()}
            </div>
            <h4 className="text-lg font-semibold text-[#822626]">Autor</h4>
            <div className="flex flex-col items-start gap-2 py-2 my-2 overflow-auto text-sm">
              
              {books && getAllAuthor()}
            </div>
          </aside>
          <div
            className={`${
              filteredBooks?.length > 0
                ? "grid max-w-5xl grid-cols-1 sm:grid-cols-2 gap-4 mt-0 xl:grid-cols-3"
                : "flex justify-start items-start flex-col w-full h-full"
            }`}
          >
            {books?.length > 0 ? (
              filteredBooks?.length > 0
              ?filteredBooks?.map(({ _id, image, title, price }) => (
                <Card
                  image={image}
                  title={title}
                  price={price}
                  id={_id}
                  key={_id}
                />
              ))
              : <h2>No hay libros disponibles con esta descripción</h2>
            ) : (
              <div className="flex flex-col items-center justify-center w-full h-full">
                <p className="text-lg text-[#822626] font-semibold">
                  Cargando...
                </p>
                <img
                  className="h-auto p-10 w-52"
                  src={libroSpinner}
                  alt="spinner"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Books;
