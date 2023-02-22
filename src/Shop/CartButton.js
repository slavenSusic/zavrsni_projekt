import Icon from './Icon'
import { useContext } from 'react'
import CartContext from './Store/Cart-Context'



const CartButton = (props) => {
    const cartCtx=useContext(CartContext)

const numberOfcartItems = cartCtx.items.reduce((curNumber,item)=>{
    return (curNumber + item.amount)
},0)

    return (


        <button onClick={props.onClick} className=" bg-white  rounded-xl 
        bg-white px-8 py-1 pt-3 absolute top-12 right-8 mt-10 max-[820px]:top-18 mt-16">
            <span className='flex text-xl items-center gap-1 
            font-extrabold text-blue-900'><Icon/> 
            
            <span>{numberOfcartItems}</span> </span></button>
    )
}
export default CartButton