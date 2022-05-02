import React from "react";

//components
import Header from "../header/header";
import Footer from "../footer/footer";

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
        <div className={footerStyle.footer__iconsContainer}>
          <p className={footerStyle.footer__iconsContainer_icon}>React</p>
          <p className={footerStyle.footer__iconsContainer_icon}>Next.js</p>
          <p className={footerStyle.footer__iconsContainer_icon}>Scss</p>
          <p className={footerStyle.footer__iconsContainer_icon}>Jest</p>
        </div>
        <div className={footerStyle.footer__textContainer}>
          &#169; Antonio Young | <a href="#">LinkedIn</a> |
          <a href="#">GitHub</a>
        </div>
      </Footer>
    </React.Fragment>
  );
};

export default Layout;
