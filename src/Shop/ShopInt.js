
import CartButton from './CartButton'

const ShopInt = (props) => {
  return (
    <div className=''>
    
    <div className="bg-gradient-to-t from-violet-900 via-black to-neutral-900 text-white py-16">
<div className='px-10 '>
  <CartButton onClick={props.onShowCart}/>
</div>
    
  <div className="text-center ">
    <h2 className="text-xl text-white">WELCOME TO THE WORLD OF CRYPTOCURRENCIES</h2>

    <h1 className="text-6xl text-extrabold text-white py-10">Fast, simple and secure </h1>
    <p className="text-3xl text-extrabold text-white" >Sell buy or deploy crypto in seconds.</p>
   </div>
   </div>
   </div>
  )
   
    
    
  };
  export default ShopInt;