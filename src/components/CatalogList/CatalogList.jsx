import css from "./CatalogList.module.css";
import CamperCart from "../CamperCart/CamperCart";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selectors";

const CatalogList = ({ campers }) => {
  const favorites = useSelector(selectFavorites);

  return (
    <ul className={css.list}>
      {campers.map((camper) => (
        <li key={camper._id}>
          <CamperCart
            camper={camper}
            liked={favorites.some((item) => item._id === camper._id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default CatalogList;