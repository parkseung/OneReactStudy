import "./Button.css";

// text : 문자열, type : 버튼의 색상 , onClick : 버튼 이벤트
const Button = ({ text, type, onClick }) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default";
  return (
    <button
      className={["Button", `Button_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  type: "default",
};
export default Button;
