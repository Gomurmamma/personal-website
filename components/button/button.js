import React from "react";

//style
import style from "../../public/sass/components/button.module.scss";

const Button = ({ children, handleContactClick }) => {
  const handleClick = () => {
    handleContactClick();
    console.log("click");
  };

  return (
    <>
      <button onClick={handleClick} className={style.button}>
        {children}
      </button>
    </>
  );
};

export default Button;
