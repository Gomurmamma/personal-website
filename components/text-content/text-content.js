import React from "react";

import style from "../../public/sass/components/home.module.scss";

//Component
import ContactForm from "../contact-form/contact-form";

const TextContent = ({ isDisplayForm, handleContactClick }) => (
  <>
    <h1 className={style.content__heading}>
      I'm <span className={style.content__namespan}> Antonio Young,</span>a web
      developer based in Stroudsburg, Pennsylvania.
    </h1>
    <p className={style.content__paragraph}>
      I build websites from scratch and have a sharp eye for accessible,
      responsive designs. Check out my latest project{" "}
      <a href="#" className={style.content__link}>
        here.
      </a>{" "}
      I'm currently available for hire.
    </p>
    <ContactForm
      isDisplayForm={isDisplayForm}
      handleContactClick={handleContactClick}
    />
  </>
);

export default TextContent;
