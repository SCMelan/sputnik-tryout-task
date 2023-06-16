import { IProps } from "Types/types";
import { ButtonClose } from "../../buttonClose";

export const ForgotPasswordModal: React.FC<IProps> = ({
  active,
  setActive,
}) => {
  return (
    <div
      className="modal_forgot"
      onClick={() => {
        setActive(!active);
      }}
    >
      <div
        className="modal_forgot-modal_content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal_forgot-modal_content-header">
          <h3>Восстановление пароля:</h3>
          <ButtonClose active={active} setActive={setActive} />
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          architecto quam aliquam dolorum expedita praesentium id reprehenderit,
          ipsum voluptatibus sunt fugiat, ut assumenda voluptas ipsa. Molestiae
          ipsam ad vero voluptatibus!45
        </p>
      </div>
    </div>
  );
};
