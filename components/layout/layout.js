import React from "react";

//components
import Header from "../header/header";
import Footer from "../footer/footer";
import TechIcons from "../tech-icons/tech-icons";
import LegalText from "../legal-text/legal-text";
//styles
import layoutStyle from "../../public/sass/components/layout.module.scss";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header>
        <button>light / dark</button>
      </Header>
      <div className={layoutStyle.content}>{children}</div>
      <Footer>
        {TechIcons()}
        {LegalText()}
      </Footer>
    </React.Fragment>
  );
};

export default Layout;
