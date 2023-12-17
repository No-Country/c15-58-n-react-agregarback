import { useState, useCallback } from "react";
import AdminBooksTable from "./AdminComponents/BooksTable";

export default function AdminDashBoard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [form, setForm] = useState({ name: "", password: "" });

  console.log(isLoggedIn);

  const handleChange = (e) => {
    
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSignIn = () => {
    if (form.name === "Admin" && form.password === "1234") {
      setIsLoggedIn(true);
    }
  };

  const SignIn = useCallback(() => {
    return (
      <main className="h-fit flex items-center justify-center text-center content-center">
        <form className="flex flex-col p-2" onSubmit={handleSignIn}>
          <h1 className="font-bold text-center text-2xl p-2 items-center">
            Debe ingresar como Administrador
          </h1>
          <label className="font-bold py-2" htmlFor="email">
            AdminName
          </label>
          <input
            className="bg-slate-200 rounded p-2"
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <label className="font-bold rounded py-2" htmlFor="email">
            Contraseña:
          </label>
          <input
            className="bg-slate-200 rounded p-2"
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="text-white text-2xl w-fit bg-[#822626] hover:shadow-gray-300 hover:bg-[#e9cccc] hover:shadow-md rounded p-1 mx-auto mt-2"
          >
            Iniciar sesión
          </button>
        </form>
      </main>
    );
  }, [form, handleSignIn]);

  return !isLoggedIn ? <SignIn /> : <AdminBooksTable />;
}