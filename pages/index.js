//Style
import style from "../public/sass/components/home.module.scss";

const Home = () => {
  return (
    <main className={style.textcontent}>
      <h1 className={style.textcontent__heading}>
        I'm <span className={style.textcontent__namespan}> Antoino Young,</span>
        a web developer based in Stroudsburg, Pennsylvania.
      </h1>
      <p className={style.textcontent__paragraph}>
        I build websites from scratch and have a sharp eye for accessible,
        responsive designs. Check out my latest project{" "}
        <a href="#" className={style.textcontent__link}>
          here.
        </a>
      </p>{" "}
      <p className={style.textcontent__paragraph}>
        I'm currently available for hire.
      </p>
    </main>
  );
};

export default Home;
