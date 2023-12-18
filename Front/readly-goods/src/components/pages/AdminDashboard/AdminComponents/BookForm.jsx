"use client";
import React, { useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function BookForm() {
  const { _id } = useParams();
  console.log(_id)
  const [formData, setFormData] = useState();
  const [book, setBook] = useState();

  useEffect(() => {
    fetch(`https://c15-58-readlygoods-three.vercel.app/books/${_id}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
      console.log(book)
  }, [_id]);

  useEffect(() => {
    if (book) {
      if (!_id && book && book.title) {
        setFormData({
          title: "",
          author: "",
          year: "",
          editorial: "",
          genre: "",
          stock: 0,
          image: "",
          price: 0,
          description: "",
          inCart: false,
        });
      } else {
        setFormData({
          title: book.title,
          author: book.author,
          year: book.year,
          editorial: book.editorial,
          genre: book.genre,
          stock: book.stock,
          image: book.image,
          price: book.price,
          description: book.description,
          inCart: false,
        });
      }
    }
  }, [book]);
  
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const book = {
      title: formData.title,
      author: formData.author,
      year: formData.year,
      editorial: formData.editorial,
      genre: formData.genre,
      stock: formData.stock,
      image: formData.image,
      price: formData.price,
      description: formData.description,
      inCart: false,
    };
    console.log(book);
    if(!_id){
      await axios
      .post(
        `https://c15-58-readlygoods-three.vercel.app/books/create`,
        book)
        .then(() => {
          setFormData({
            title: "",
            author: "",
            year: "",
            editorial: "",
            genre: "",
            stock: 0,
            image: "",
            price: 0,
            description: "",
            inCart: false,
          });
        })
        .catch((error) => window.alert(error.message));
      }else{
        await axios
        .post(
          `https://c15-58-readlygoods-three.vercel.app/books/update/${_id}`,
          book
        )
        .catch((error) => window.alert(error.message));
      }
      
  };

  return (
    <main className="h-full w-full flex items-center justify-center text-center my-4 rounded-xl">
    <div className="h-[70%] w-[70%] bg-[#9c1214ad] rounded-xl">
      <form
        onSubmit={handleSubmit}
        className="bg-[#9c1214ad] w-full h-full rounded-xl grid grid-cols-1 md:grid-cols-3 text-white"
      >
        <div className="flex flex-col m-4 justify-around text-white">
          <div className="mb-6">
            <label className="font-bold mb-2 text-center">Título</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="title"
              value={formData?.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="font-bold mb-2 text-center">Autor:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="author"
              checked={formData?.author}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="font-bold mb-2 text-center">Año:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="year"
              checked={formData?.year}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-col m-4 justify-around">
          <div className="mb-6">
            <label className="font-bold mb-2 text-center">Editorial:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="editorial"
              value={formData?.editorial}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="font-bold mb-2 text-center">Genero:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="genre"
              value={formData?.genre}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="font-bold mb-2 text-center">Stock:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="stock"
              value={formData?.stock}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="flex flex-col m-4 justify-around">
          <div className="mb-6">
            <label className="font-bold mb-2 text-center">Imagen</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="image"
              value={formData?.image}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="font-bold mb-2 text-center">Precio:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="price"
              checked={formData?.price}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="font-bold mb-2 text-center">Resumen:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="description"
              checked={formData?.description}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <button
            className="text-white text-2xl w-fit bg-[#822626] hover:shadow-gray-300 hover:bg-[#e9cccc] hover:shadow-md rounded p-1 mx-auto my-2"
            type="submit"
          >
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  </main>
  );
}
