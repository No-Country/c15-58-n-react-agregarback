import { useContext, useRef, useState } from "react";
import axios from "axios";
import { useLocalStorage } from "./useLocalStorage";
import Swal from "sweetalert2";

const initialForm = {
  username: "",
  fullname: "",
  email: "",
  password: "",
};

export const useForm = () => {


  const [isLogin, setIsLogin] = useState(false); //si ya esta registrado o no, inicia en false
  const formIsOkRef = useRef(false); //-------------el registro debe estar completado correctamente
  const [form, setForm] = useState(initialForm); //
  //-------------errores en el registro---------------------------------
  const [errors, setErrors] = useState({
    userNameError: false,
    fullNameError: false,
    emailError: false,
    passwordError: false,
  });
  //-----------------------localstorage--------------------------------------------------
  const [loginOk, setLoginOk] = useLocalStorage("loginOk", false); // Si inicio sesion correctamente y se guarda en el storage
  const [userData, setUserData] = useLocalStorage("userData", {}); // se guarda datos del usuario en el storage

  const [loading, setLoading] = useState(false);
  //---------estados y funciones del modal de Registro-------------------------------------------
  const [isOpen, setIsOpen] = useState(false); //
  const openModal = () => setIsOpen(true); //
  const closeModal = () => setIsOpen(false); //

  const handleCloseSesion = () => {
    setLoginOk(false);
    setUserData({}); //al cerrar la sesion se borra del storage
    return loginOk;
  };
  const handleOpenSesion = () => {
    setLoginOk(true);
    return loginOk;
  };

  const validationSignInOk = () => {
    const { username, fullname, email, password } = form;
    const { userNameError, fullNameError, emailError, passwordError } = errors;
    if (isLogin) {
      
      if (email!=='' && password!=='' && !emailError && !passwordError) {
        formIsOkRef.current = true;
      } else {
        formIsOkRef.current = false;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Hubo un error en el formulario",
          footer: '<a href="#">Por favor complete los campos correctamente.</a>',
        });
      }
    } else {
      if (username !=='' && fullname!=='' && email!=='' && password!=='' && !userNameError && !fullNameError && !emailError && !passwordError) {
        formIsOkRef.current = true;
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Hubo un error en el formulario",
          footer: '<a href="#">Por favor complete los campos correctamente.</a>',});
        formIsOkRef.current = false;
      }
    }
    return formIsOkRef;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  //------
  const validateForm = (nameError, valueError) => {
    setErrors({
      ...errors,
      [nameError]: valueError,
    });
  };

  const handleKeyUpUser = () => {
    let regExpUser = /^[a-zA-Z0-9_\-]+$/;
    if (!regExpUser.test(form.username.trim())) {
      validateForm("userNameError", true);
    } else {
      validateForm("userNameError", false);
    }
    return errors;
  };

  const handleKeyUpFullName = () => {
    let regExpFullName = /^[a-zA-Z\u00C0-\u00FF\s]+$/;
    if (!regExpFullName.test(form.fullname.trim())) {
      validateForm("fullNameError", true);
    } else {
      validateForm("fullNameError", false);
    }
    return errors;
  };
//----------validar al sacar el foco del campo----------------
  const handleOnBlurEmail = () => {
    let regExpEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    if (!regExpEmail.test(form.email.trim())) {
      validateForm("emailError", true);
    } else {
      validateForm("emailError", false);
    }
    return errors;
  };
///------------funcion para sacar el error al hacer click en el campo-----------------
  const handleOnFocusEmail = () => {
    validateForm("emailError", false);
    return errors;
  };
//----------validar al sacar el foco del campo----------------
  const handleOnBlurPassword = () => {
    let regExpPassword = /^\d{4,8}$/; // ------entre 4 a 8 digitos--------------------------
    if (!regExpPassword.test(form.password.trim())) {
      validateForm("passwordError", true);
    } else {
      validateForm("passwordError", false);
    }
    return errors;
  };
//------------funcion para sacar el error al hacer click en el campo-----------------
  const handleOnFocusPassword = () => {
    validateForm("passwordError", false);
    return errors;
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    validationSignInOk();
    if (formIsOkRef.current) {
      axios
        .post(
          isLogin
            ? "https://c15-58-readlygoods-three.vercel.app/users/login"
            : "https://c15-58-readlygoods-three.vercel.app/users/create",
          form
        )
        .then((res) => {
          setUserData(res);
          handleOpenSesion();
          setForm(initialForm);
          closeModal();
        })
        .catch((er) => {
          isLogin
            ? Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Hubo un error en su email o contraseña",
                footer: '<a href="#">Por favor vuelve a intentarlo.</a>',
              })
            : Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Hubo un error",
                footer: '<a href="#">Por favor vuelve a intentarlo.</a>',
              });

          setForm(initialForm);
          handleCloseSesion();
        });
    }
  };


  return {
    isOpen,
    openModal,
    closeModal,
    form,
    errors,
    loginOk,
    setLoginOk,
    isLogin,
    setIsLogin,
    handleCloseSesion,
    loading,
    handleChange,
    handleKeyUpUser,
    handleKeyUpFullName,
    handleOnFocusEmail,
    handleOnBlurEmail,
    handleOnBlurPassword,
    handleOnFocusPassword,
    handleSubmit,
  };
};