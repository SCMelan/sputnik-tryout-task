import { IProps } from "Types/types";
import { ButtonClose } from "../../buttonClose";

export const RegistrationModal: React.FC<IProps> = ({ active, setActive }) => {
  return (
    <div
      className="modal_registr"
      onClick={(e) => {
        setActive(!active);
      }}
    >
      <div
        className="modal_registr-modal_content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal_registr-modal_content-header">
          <h3>Регистрация:</h3>
          <ButtonClose active={active} setActive={setActive} />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magni
          adipisci excepturi a quod quas quis explicabo nulla eum atque!
        </p>
      </div>
    </div>
  );
};
