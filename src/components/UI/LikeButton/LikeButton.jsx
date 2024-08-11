import css from "./LikeButton.module.css";
import icons from "../../../assets/icons.svg";

const LikeButton = () => {
  return (
    <button>
      <svg className={css.icon} width={24} height={24}>
        <use xlinkHref={icons + "#icon-unliked"}></use>
      </svg>
    </button>
  );
};

export default LikeButton;