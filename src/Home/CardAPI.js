import React from "react";

// import { Zoom } from "react-awesome-reveal";

const CardAPI = (props) => {
  return (
    <div className=''>
      {/* <Zoom duration={3000}> */}
      
      <div className="flex justify-center pb-12">
        <h1 className="font-extrabold mt-20 text-center text-5xl inline-block relative py-2 border-b-2 border-blue-300  text-purple-200 ">
          Our top trending coins
        </h1>
       
      </div>
      
     
      <div className="mt-10 flex justify-center gap-14 lg:mx-10 min-[0px]:max-[641px]:grid grid-cols-1 justify-items-center md:flex justify-center px-10  ">
     
        {props.cardList.map((card) => (
          <div className=" py-10 px-3 card w-96 bg-base-100 shadow-xl bg-gray-700 text-center text-white lg:mx-10 md:py-5  min-[0px]:max-[404px]:w-72 ">
            <div className="card-body ">
              <h2 className="card-title block font-semibold">{card.name}</h2>
              <h2 className="card-title block font-semibold">${card.current_price}</h2>
             
              
            
            </div>
            <figure className="flex justify-center py-4">
            <img className="max-h-16" src={card.image} alt='image'/>
            </figure>
            <button  class="m-2 mx-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 
            rounded px-12 sm: text-sm py-1 px-2 xs:text-xs  md:py-5 px-10 " > Buy Now </button>
                      </div>
          
         
        ))}
      </div>
      {/* </Zoom> */}
      </div>
   
  );
};
export default CardAPI;
