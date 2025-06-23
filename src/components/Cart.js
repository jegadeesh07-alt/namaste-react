import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import Button from "@mui/material/Button";
import { clearCart } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch()

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className="text-center m-5 p-5 ">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div className="w-6/12 m-auto p-5" >
      <Button 
        variant="contained"
        onClick={handleClearCart} 
        >Clear Cart</Button>
        <div>
       {cartItems.length == 0 && <h1 className="p-40 " >Your cart is empty please add Items to the Cart</h1>}
        <ItemList className="p-5" items={cartItems}  />
         
        </div>

      </div>
    </div>
  );
};
export default Cart;
