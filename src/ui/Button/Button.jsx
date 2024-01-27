import style from "./Button.module.scss";
const Button = ({ color, onClick }) => {
  return (
    <button onClick={onClick} className={style.btn} style={{ backgroundColor: color }}>
      Заказать
    </button>
  );
};

export default Button;
