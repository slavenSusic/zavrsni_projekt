
import { useContext } from 'react';
import Modal from './Modal'
import CartItem from './Store/CartItem'
import CartContext from './Store/Cart-Context';



const Cart = (props) => {

    const cartCtx=useContext(CartContext)
    const totalAmount=cartCtx.totalAmount.toFixed(2)
    const hasItems=cartCtx.length > 0
    const cartItemRemoveHandler=id =>{
        cartCtx.removeItem(id);
    }

    const cartItemAddHandler = item =>{
        cartCtx.addItem({...item,amount:1})
    }



    const cartItems=(
    <ul className=" overflow-scroll max-h-96 " >{cartCtx.items
    .map((item) => (<CartItem key={item.id}
    name={item.name}
    amount={item.amount}
    price={item.price} onRemove={cartItemRemoveHandler.bind(null,item.id)}
    onAdd={cartItemAddHandler.bind(null,item)}/>))}</ul>);
    return (
            <Modal onClick={props.onCloseCart}>
                {cartItems}
                <div className='flex overflow-scroll justify-around items-center'><span>Total Amount</span>
                    <span>${totalAmount}</span></div>
                <div>
                    <button onClick={props.onCloseCart} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Close</button>
                    { hasItems && <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none
                     dark:focus:ring-blue-800'>Order</button>}
                </div>
            </Modal>
            
    )

}
export default Cart