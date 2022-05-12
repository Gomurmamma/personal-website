import React, { useState } from "react";

import emailjs from "@emailjs/browser";

//SVG as Component
import XIcon from "../../public/img/x-icon.svg";

//style
import style from "../../public/sass/components/contactform.module.scss";

const ContactForm = ({ isDisplayForm, handleContactClick }) => {
  //Initialize State
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
    buttonText: "Send",
    error: "",
    success: "",
  });

  //Destructure State values for ease of access
  const { name, email, message, buttonText, error, success } = state;

  //Handle State Changes
  const handleChange = (name) => (e) => {
    setState({
      ...state,
      [name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.table({ name, email, message });

    setState({ ...state, buttonText: "SENDING" });
    try {
      const templateParams = {
        name,
        email,
        message,
      };

      //! UPDATE PARAMS!
      const response = emailjs.send(
        "<SERVICE_ID>",
        "<TEMPLATE_ID>",
        templateParams,
        "<PUBLIC_KEY>"
      );

      //update state
      setState({
        ...state,
        name: "",
        email: "",
        message: "",
        buttonText: "Submitted",
        success: response.data.message,
      });
    } catch (error) {
      //update state
      setState({
        ...state,
        buttonText: "Send",
        error: error.response.data.error,
      });
    }
  };

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
          required
          type="email"
          name="email"
          className={style.contactform__input}
          placeholder="Enter your email"
          onChange={handleChange("email")}
        ></input>

        <label className={style.contactform__label}>Name</label>
        <input
          required
          type="text"
          name="name"
          className={style.contactform__input}
          placeholder="Enter your preferred name"
          onChange={handleChange("name")}
        ></input>

        <label className={style.contactform__label}>Message</label>
        <textarea
          required
          name="message"
          className={style.contactform__input}
          form="contactform"
          placeholder="Type your message"
          onChange={handleChange("message")}
        ></textarea>
        <br></br>
        <>
          {error ? <div>An Error While Sending Your Message</div> : ""}
          {success ? <div>Thank you! Your message has been sent.</div> : ""}
        </>
        <input
          type="submit"
          form="contactform"
          value="SEND"
          className={style.contactform__submit}
        ></input>
      </form>
    </div>
  );
};

export default ContactForm;
