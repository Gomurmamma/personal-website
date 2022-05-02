import style from "../../public/sass/components/header.module.scss";

const Header = ({ children }) => {
  return <header className={style.header}>{children}</header>;
};

export default Header;
