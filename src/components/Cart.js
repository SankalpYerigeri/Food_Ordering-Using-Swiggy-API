
import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () =>
{

    const cartItems = useSelector((store)=> store.cart.items);
    console.log(cartItems);
    return (
        <>
        <div className="text-center m-4 p-4">
            <div className="font-bold">Cart</div>
            <div>
                <ItemList data={cartItems}/>
            </div>
        </div>
        </>
    )
}

export default Cart;