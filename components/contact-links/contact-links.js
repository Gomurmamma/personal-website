import React from "react";

//SVG icons
import LinkedInIcon from "../../public/img/linkedin-icon.svg";
import GitHubIcon from "../../public/img/Octicons-mark-github.svg";

//Components
import Button from "../button/button";

//styles
import styles from "../../public/sass/components/contactlinks.module.scss";

const ContactLinks = ({ handleContactClick }) => {
  return (
    <div className={styles.contactlinks}>
      <a href="#" alt="Link to Antonio Young's LinkedIn Profile">
        <LinkedInIcon className={styles.contactlinks__icon} />
      </a>

      <a href="#" alt="LinkedIn">
        <GitHubIcon className={styles.contactlinks__icon} />
      </a>
      <Button handleContactClick={handleContactClick}>Contact Me</Button>
    </div>
  );
};

export default ContactLinks;
