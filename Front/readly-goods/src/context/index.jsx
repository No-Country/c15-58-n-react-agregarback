import { createContext, useState } from "react";
import { useForm } from "../components/hooks/useForm";
import { useCart } from "../components/hooks/useCart";

export const context = createContext();

//------------Validacion del form---------------------------------------------------

//----------------------------------------------------------------------------------------------

const ContextProvider = ({ children }) => {
  //---------------cart----------------------------------------------------
  const {
    products,
    addProduct,
    deleteAllProducts,
    deleteProduct,
    totalPrice,
    badgeCount,
  } = useCart();
  //------------Validacion del form--------------------------------------------------
  const {
    form,
    errors,
    isLogin,
    isOpen,
    openModal,
    closeModal,
    setIsLogin,
    loginOk,
    setLoginOk,
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
  } = useForm();

  //----------------------------------------------------------------------------------------------

  return (
    <context.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
        handleCloseSesion,
        isLogin,
        setIsLogin,
        loginOk,
        setLoginOk,
        form,
        errors,
        loading,
        handleChange,
        handleKeyUpUser,
        handleKeyUpFullName,
        handleOnFocusEmail,
        handleOnBlurEmail,
        handleOnBlurPassword,
        handleOnFocusPassword,
        handleSubmit,
        products,
        addProduct,
        deleteAllProducts,
        deleteProduct,
        totalPrice,
        badgeCount,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
