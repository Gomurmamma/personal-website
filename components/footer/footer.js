import style from "../../public/sass/components/footer.module.scss";

const Footer = ({ children }) => {
  return <footer className={style.footer}>{children}</footer>;
};

export default Footer;
