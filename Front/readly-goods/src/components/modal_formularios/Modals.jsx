import React, { useContext } from "react";
import Modal from "./Modal";
import { context } from "../../context";
import FormSignIn from "./FormSignIn";
import FormLogIn from "./FormLogin";

const Modals = () => {
  const { isOpen, closeModal, isLogin } = useContext(context);

  return (
    <div>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        {isLogin ? <FormLogIn /> : <FormSignIn />}
      </Modal>
    </div>
  );
};

export default Modals;
