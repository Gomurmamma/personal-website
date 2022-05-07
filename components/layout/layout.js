import React from "react";

//components
import Header from "../header/header";
import Footer from "../footer/footer";
import TechIcons from "../tech-icons/tech-icons";

//styles
import layoutStyle from "../../public/sass/components/layout.module.scss";
import footerStyle from "../../public/sass/components/footer.module.scss";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header>
        <button>light / dark</button>
      </Header>
      <div className={layoutStyle.content}>{children}</div>
      <Footer>
        {TechIcons()}
        <div className={footerStyle.footer__textContainer}>
          &#169; Antonio Young
        </div>
      </Footer>
    </React.Fragment>
  );
};

export default Layout;
