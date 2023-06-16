import { IProps } from "Types/types";
import { ButtonClose } from "../../buttonClose";

export const ConnectWithUsModal: React.FC<IProps> = ({ active, setActive }) => {
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
          <h3>Раздел в разработке</h3>
          <ButtonClose active={active} setActive={setActive} />
        </div>
        <p>Данный раздел сайта находится в разработке!</p>
        <p>
          Простите за доставленные неудобства, все вопросы по поводу функционала
          можно направить на почту -
          <a
            href="#"
            onClick={(e) => {
              window.location.href = "mailto:scmelan@gmail.com";
              e.preventDefault();
            }}
          >
            scmelan@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};
