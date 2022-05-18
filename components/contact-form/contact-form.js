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
    nameError: "",
    messageError: "You must include a message",
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
        buttonText: "Sent",
        success: response.data.message,
      });
    } catch (error) {
      //update state
      setState({
        ...state,
        buttonText: "Send",
        error: error,
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
      <form id="contactform" onSubmit={handleSubmit}>
        <h2 className={style.contactform__title}>Contact Me</h2>
        <p className={style.contactform__requiredFields}>
          Required fields are indicated with an "
          <span className={style.contactform__asterisk} alt="Required Field">
            *
          </span>
          "
        </p>

        <label htmlFor="email" className={style.contactform__label}>
          Email:
          <span className={style.contactform__asterisk} alt="Required Field">
            *
          </span>
        </label>
        <input
          required
          type="email"
          name="email"
          id="email"
          className={style.contactform__input}
          placeholder="Enter your email"
          onChange={handleChange("email")}
          title="Email should be a valid address"
          pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
        ></input>
        <p className={style.contactform__input__tooltip}>
          Enter your preferred email
        </p>
        <span className={style.contactform__requirements}>
          Must be a valid email address
        </span>

        <label htmlFor="name" className={style.contactform__label}>
          Name:
          <span className={style.contactform__asterisk} alt="Required Field">
            *
          </span>
        </label>
        <input
          required
          type="text"
          name="name"
          id="name"
          className={style.contactform__input}
          placeholder="Enter your preferred name"
          title="Enter your preferred name"
          onChange={handleChange("name")}
          maxLength="50"
        ></input>
        <p className={style.contactform__input__tooltip}>
          Enter your preferred name
        </p>

        <label htmlFor="message" className={style.contactform__label}>
          Message:
          <span className={style.contactform__asterisk} alt="Required Field">
            *
          </span>
        </label>
        <textarea
          required
          name="message"
          id="message"
          className={style.contactform__input}
          form="contactform"
          placeholder="Type your message"
          title="Type your message here"
          onChange={handleChange("message")}
        ></textarea>
        <p className={style.contactform__input__tooltip}>
          Include your message here
        </p>
        <br></br>
        <>
          {error ? (
            <p className={style.contactform__submitResponse}>
              An Error Occurred While Sending Your Message
            </p>
          ) : (
            ""
          )}
          {success ? (
            <p className={style.contactform__submitResponse}>
              Thank you! Your message has been sent.
            </p>
          ) : (
            ""
          )}
        </>
        <button
          type="submit"
          form="contactform"
          value="SEND"
          className={style.contactform__submit}
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
