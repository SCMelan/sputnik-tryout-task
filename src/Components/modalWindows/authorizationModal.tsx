import { ChangeEvent, MouseEvent, useState } from "react";

import {
  RegistrationModal,
  ConnectWithUsModal,
  ForgotPasswordModal,
} from "./additionalModals";
import { IProps } from "Types/types";
import { ButtonClose } from "../buttonClose";

export const AuthorizationModal: React.FC<IProps> = ({ active, setActive }) => {
  const [registrModal, setRegistrModal] = useState(false);
  const [forgotModal, setForgotModal] = useState(false);
  const [connectWithUs, setConnectWithUs] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const registrHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setRegistrModal(!registrModal);
  };

  const forgotHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setForgotModal(!forgotModal);
  };
  const connectHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setConnectWithUs(!connectWithUs);
  };

  const [emailValue, setEmailValue] = useState("");
  const [emailError, setEmailError] = useState("");

  const changeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailValue((event.target as HTMLInputElement).value);
    const validate =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (
      !validate.test((event.target as HTMLInputElement).value.toLowerCase())
    ) {
      setEmailError("Введите корректный e-mail");
      setIsEmailValid!(false);
    } else {
      setEmailError("");
      setIsEmailValid!(true);
    }
  };

  return (
    <>
      <div className="auth">
        <form className="auth-block">
          <p className="auth-block_text">Войдите в свой профиль</p>
          <div className="auth-block_login">
            <label htmlFor="login" className="auth-block_label">
              Логин
            </label>
            <input
              autoComplete="none"
              id="login"
              className={
                emailValue.length > 3 && emailError
                  ? "auth-block_input-error"
                  : "auth-block_input"
              }
              placeholder="Введите логин"
              value={emailValue}
              onChange={changeEmail}
              type="email"
            />
            {emailValue.length > 3 && emailError && (
              <p className="auth-block_email-error">{emailError}</p>
            )}
          </div>
          <div className="auth-block_password">
            <label htmlFor="password" className="auth-block_label">
              Пароль
            </label>
            <input
              id="password"
              type="password"
              className="auth-block_input"
              placeholder="Введите пароль"
            />
          </div>
          <button className="auth-block_button">Войти</button>
          <div className="additional_modals">
            <button
              className="additional_modals-button"
              onClick={registrHandler}
            >
              Зарегистрироваться
            </button>
            <button
              className="additional_modals-button"
              onClick={forgotHandler}
            >
              Я забыл пароль
            </button>
            <button
              className="additional_modals-connect_with_us"
              onClick={connectHandler}
            >
              Связаться с нами
            </button>
          </div>
        </form>
        <ButtonClose active={active} setActive={setActive} />
      </div>
      {registrModal && (
        <RegistrationModal active={registrModal} setActive={setRegistrModal} />
      )}
      {forgotModal && (
        <ForgotPasswordModal active={forgotModal} setActive={setForgotModal} />
      )}
      {connectWithUs && (
        <ConnectWithUsModal
          active={connectWithUs}
          setActive={setConnectWithUs}
        />
      )}
    </>
  );
};
