
import Shimmer from "./Shimmer";
import useResMenu from "../utils/useResMenu"
import { useParams } from "react-router-dom";

const ResMenu = () => {
    const {resId} = useParams()

    const resInfo = useResMenu(resId)

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const menuCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const category = menuCards.find((card) =>
    Array.isArray(card?.card?.card?.itemCards)
  );

  const itemCards = category?.card?.card?.itemCards || [];


  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{"Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ResMenu;
