import React from "react";
import LoginForm from "../forms/Login";

const LoginModal = ({ open = false, handleCloseModal }) => {
  let classn = "login-modal";
  if (!open) classn = "";
  console.log(open);
  return (
    <section className={classn}>
      <div className="login-modal_form">
        <LoginForm />
      </div>
      <div
        onClick={handleCloseModal}
        className={open ? "login-modal_open" : "login-modal_close"}
      >
        <i class="material-icons">close</i>
      </div>
    </section>
  );
};

export default LoginModal;
