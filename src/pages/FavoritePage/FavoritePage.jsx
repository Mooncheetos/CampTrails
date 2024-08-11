import CatalogList from "../../components/CatalogList/CatalogList";
import { InvisibleTitle, Message } from "../../components/UI";
import { selectFavorites } from "../../redux/favorites/selectors";
import { useSelector } from "react-redux";

const FavoritePage = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <main>
      <InvisibleTitle>You favorite campers</InvisibleTitle>
      {favorites.length ? (
        <CatalogList campers={favorites} />
      ) : (
        <Message>No campers added</Message>
      )}
    </main>
  );
};

export default FavoritePage;