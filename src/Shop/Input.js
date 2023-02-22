import React from "react"
const Input =React.forwardRef(( props,ref) =>{
 return <div className="flex ">
    <label htmlFor={props.input.id}>{props.label}</label>
    <input className=" w-10 mx-5 text-black text-center rounded-md" 
    ref={ref} {...props.input}/>
 </div>
})
export default Input