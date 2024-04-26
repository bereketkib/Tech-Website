import { arrowBlack } from "../assets";

const Button = ({ content, customStyle, isArrow }) => {
  return (
    <button
      className={`${customStyle} flex items-center ${
        isArrow && "justify-between"
      } justify-center px-7 py-3 w-[300px] cursor-pointer`}
    >
      <p className="font-poppins font-thin tracking-tight">{content}</p>
      {isArrow && (
        <img src={arrowBlack} alt="black arrow" className="w-[60px] h-[30px] " />
      )}
    </button>
  );
};

export default Button;
