import { addItem } from "../store/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {

  const dispatch = useDispatch()

  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }
  
  return (
    <div >
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12 pt-2 " >
            <div className="py-3">
              <span>{item.card.info.name}</span><br />
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

          <div className="w-32 h-30 p-2 pb-4">
            <div className="absolute">
             <button  className=" mx-7  p-1 bg-white text-black cursor-pointer shadow-lg rounded-lg font-bold" 
             onClick={() => handleAddItem(item)}> 
             Add +</button>
             </div>
            <img className="rounded-lg w-full h-25" src={CDN_URL + item.card.info.imageId} />
           
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
