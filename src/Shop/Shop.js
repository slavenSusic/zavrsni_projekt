import ShopInt from "./ShopInt";
import Cart from './Cart'
import { useState } from "react";
import CartProvider from './Store/CartProvider'
import Table from "./Table";
const Shop = () => {
    const [cartIsShown, setCartisshown] = useState(false)

    const showCarthandler =() => {
        setCartisshown(true)

    }
    const hideCartHandler=() => {
        setCartisshown(false)
    }

    return  (
    
    <CartProvider>
        {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
        <ShopInt onShowCart={showCarthandler}/>
        <Table/>
        
    </CartProvider>
    )
}
export default Shop;