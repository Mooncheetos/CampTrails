import css from "./HomePage.module.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className={css.content}>
      <div className={css.wrapper}>
        <h1 className={css.title}>
          Welcome to our <span>CamperVan</span> website store
        </h1>
        <p className={css.text}>
          Begin your adventure today and discover the perfect camper that will make your journey unforgettable.
        </p>
        <Link className={css.link} to={"/catalog"}>
          Explore campers
        </Link>
      </div>
    </main>
  );
};

export default HomePage;