//Components
import ContactLinks from "../components/contact-links/contact-links";

import TextContent from "../components/text-content/text-content";

//Style
import style from "../public/sass/components/home.module.scss";

const Home = () => {
  return (
    <main className={style.content}>
      {TextContent()}
      {ContactLinks()}
    </main>
  );
};

export default Home;
