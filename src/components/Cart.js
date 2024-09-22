
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () =>
{

    const cartItems = useSelector((store)=> store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch();

    const handleClearCart = () =>
    {
        
        dispatch(clearCart());
    }
    return (
        <>
        <div className="text-center m-4 p-4">
            <div className="font-bold">Cart</div>
            {cartItems.length > 0 ? 
                <button className="p-2 m-2 rounded-lg bg-black text-white" onClick={handleClearCart}>Clear Cart</button> :
                <h1 className="font-bold p-2 m-2">No items in Cart</h1>
            }
            <div className="w-6/12 m-auto">
                <ItemList data={cartItems}/>
            </div>
        </div>
        </>
    )
}

export default Cart;