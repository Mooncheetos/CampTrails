import css from "./Location.module.css";
import icons from "../../../assets/icons.svg";

const Location = ({ children }) => {
  return (
    <div className={css.container}>
      <svg className={css.icon} width={16} height={16}>
        <use xlinkHref={icons + "#icon-location"}></use>
      </svg>
      <span>{children}</span>
    </div>
  );
};

export default Location;