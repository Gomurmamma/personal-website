import React from "react";

//SVG as Component
import XIcon from "../../public/img/x-icon.svg";

//style
import style from "../../public/sass/components/contactform.module.scss";

const ContactForm = ({ isDisplayForm, handleContactClick }) => {
  const handleClick = () => {
    handleContactClick();
  };

  return (
    <div
      className={
        isDisplayForm === true ? style.contactform : style.contactform__hidden
      }
    >
      <XIcon className={style.contactform__icon} onClick={handleClick} />
      <form id="contactform">
        <h2 className={style.contactform__title}>Contact Me</h2>
        <label className={style.contactform__label}>Email</label>
        <input
          type="email"
          name="email"
          className={style.contactform__input}
          placeholder="Enter your email"
        ></input>

        <label className={style.contactform__label}>Message</label>
        <textarea
          name="message"
          className={style.contactform__input}
          form="contactform"
          placeholder="Type your message"
        ></textarea>
        <br></br>
        <input
          type="submit"
          form="contactform"
          value="SUBMIT"
          className={style.contactform__submit}
        ></input>
      </form>
    </div>
  );
};

export default ContactForm;
