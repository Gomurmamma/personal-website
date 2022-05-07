import React from "react";

//import SVG files
import ReactIcon from "../../public/img/React-icon.svg";
import NextIcon from "../../public/img/Nextjs-logo(1).svg";
import SassIcon from "../../public/img/Sass_Logo_Color.svg";
import JestIcon from "../../public/img/jest-seeklogo.com.svg";

//Style
import style from "../../public/sass/components/techicons.module.scss";

const TechIcons = () => {
  return (
    <div className={style.techicons}>
      <ReactIcon className={style.techicons__icon} />
      <NextIcon className={style.techicons__Nexticon} />
      <SassIcon className={style.techicons__icon} />
      <JestIcon className={style.techicons__icon} />
    </div>
  );
};

export default TechIcons;
