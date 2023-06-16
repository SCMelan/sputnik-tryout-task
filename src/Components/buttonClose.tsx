import { IProps } from "Types/types";

export const ButtonClose: React.FC<IProps> = ({ active, setActive }) => {
  return (
    <button
      type="button"
      className="auth_button"
      onClick={() => {
        setActive(!active);
      }}
    >
      <span className="auth_button-cross"></span>
    </button>
  );
};
