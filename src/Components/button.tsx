import { useState } from "react";
import { AuthorizationModal } from "./modalWindows";

export const Button: React.FC = () => {
  const [auth, setAuth] = useState(false);

  const buttonHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setAuth(!auth);
  };
  return (
    <>
      {auth ? (
        <AuthorizationModal active={auth} setActive={setAuth} />
      ) : (
        <button className="button-handler" onClick={buttonHandler}>
          {auth ? "Закрыть окно входа" : "Войти на сайт"}
        </button>
      )}
    </>
  );
};
