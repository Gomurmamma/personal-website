//React
import { useState } from "react";

//Components
import ContactLinks from "../components/contact-links/contact-links";

import TextContent from "../components/text-content/text-content";

//Style
import style from "../public/sass/components/home.module.scss";

const Home = () => {
  //Set State
  const [isDisplayForm, setDisplayForm] = useState(false);

  //handleClick
  const handleContactClick = () => {
    console.log(isDisplayForm);
    setDisplayForm((isDisplayForm) => !isDisplayForm);
  };

  return (
    <main className={style.content}>
      <TextContent isDisplayForm={isDisplayForm} />
      <ContactLinks handleContactClick={handleContactClick} />
    </main>
  );
};

export default Home;
