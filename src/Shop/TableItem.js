import { useContext } from "react";
import TableItemForm from "./TableItemForm";
import CartContext from "./Store/Cart-Context";

import { Fade } from "react-awesome-reveal";

const TableItem = (props) => {
 const cartCtx = useContext(CartContext);
 const  addToCarthandler = (amount) => {
    cartCtx.addItem({
        id:props.id,
        name:props.name,
        amount:amount,
        price:props.price
    });
  };
  return (
    <>
  <div className=" flex justify-center items-center ">
    <Fade duration={2000}>
    <table className="mx-auto text-center text-xl">
 <tr className=' items-center grid grid-cols-7 md:grid-cols-7 min-[0px]:text-center max-[800px]:grid-cols-6 text-lg min-[0px]:text-center max-[638px]:grid-cols-5 '>
    <td class=" px-4 py-2 min-[0px]:text-center max-[638px]:hidden">{props.rank}</td>
    <td class=" px-4 py-2 ">{props.name}</td>
    <td class=" px-4 py-2 "><img className=" max-h-20 lg:pl-10 " src={props.img} alt='icon '/></td>
    <td class=" px-4 py-2 max-[380px]:text-sm">${props.price}</td>
    <td className={`${props.t24h < 0 ? " font-bold text-red-500" : " font-bold text-green-500"}   px-4 py-2 min-[0px]:text-center max-[800px]:hidden`}>{props.t24h.toFixed(3)}%</td>
    <td class=" px-4 py-2 min-[320px]:text-center max-[1280px]:hidden">{props.supply.toFixed(2)}</td>
    <td class=" px-4"><TableItemForm onAddToCart={addToCarthandler} /></td>

</tr>
</table>
</Fade>
</div>

  </>
  );
};
export default TableItem;
