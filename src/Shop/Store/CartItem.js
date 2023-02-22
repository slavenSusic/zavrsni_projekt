

const CartItem = (props) => {
 

  return (
    <li className="flex justify-between items-center mx-3 px-1">
      <h2 className='font-extrabold mb-0.2'>{props.name}</h2>
      <div className='flex justify-between items-center justify-center'>
        
        <div className=" pt-2  my-5 mx-5 ">
          <span className="">${props.price}</span>
          <span className="font-extrabold"> x ({props.amount})</span>
        </div>
      
      <div className="">
        <button className="ml-5 mt-2 bg-blue-200 hover:bg-blue-500 text-purple-800 font-bold py-1 px-6 rounded-xl '" onClick={props.onRemove}>−</button>
        <button className="ml-5 mt-2 bg-blue-200 hover:bg-blue-500 text-purple-800 font-bold py-1 px-6 rounded-xl " onClick={props.onAdd}>+</button>
      </div>
      </div>
    </li>
  );
};

export default CartItem;
