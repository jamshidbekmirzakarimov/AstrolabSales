import style from "./Button.module.scss";
const Button = ({ color, onClick }) => {
  return (
    <button onClick={onClick} className={style.btn} style={{ backgroundColor: color }}>
     Buyurtma qilish
    </button>
  );
};

export default Button;
