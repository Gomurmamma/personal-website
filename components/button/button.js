import React from "react";

//style
import style from "../../public/sass/components/button.module.scss";

const Button = ({ children }) => (
  <>
    <button className={style.button}>{children}</button>
  </>
);

export default Button;
