import React from "react";

//style
import style from "../../public/sass/components/contactform.module.scss";

const ContactForm = ({ isDisplayForm }) => {
  return (
    <div
      className={
        isDisplayForm === true ? style.contactform : style.contactform__hidden
      }
    >
      <form>
        <h2>Contact Me</h2>
        <label>Email</label>
        <input type="email" name="email"></input>
        <br></br>
        <label>Message</label>
        <input type="text" name="text"></input>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ContactForm;
