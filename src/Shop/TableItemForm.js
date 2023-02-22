import { useRef } from "react";
import Input from "./Input";

const TableItemForm = (props) => {

    const amountInputRef=useRef();
    const submitHandler = event => {
        event.preventDefault()
        const enteredAmount=amountInputRef.current.value;
        const enteredAmountNumber=+enteredAmount;
        if(enteredAmount.trim().length === 0 || enteredAmountNumber <0 || enteredAmount >100){
            return;
        }
        props.onAddToCart(enteredAmountNumber)
    }
 
 
 return <form className="flex flex-col items-right pr-0 max-[450px]:pl-3" onSubmit={submitHandler}>


        <Input className ='' 
        ref={amountInputRef}
            label="Amount" input={{
            id:'amount',
            type:'number',
            defaultValue:'1'
        }}/>
        <button className='mt-2 bg-white hover:bg-blue-500 text-purple-800 font-bold py-2 px-4 rounded-xl max-[535px]:pr-10 max-[600px]:text-sm pr-5'>Buy</button>
        
    </form>
}
export default TableItemForm;