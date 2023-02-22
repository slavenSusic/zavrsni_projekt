
import React from 'react';



const CoinAdd = (props) => {


  return (
    <div>

    <ul className='flex text-lg gap-5' >
      <li class=" px-4 py-2">{props.name}</li>
      <li class=" px-4 py-2">${props.price}</li>
      <li class=" px-4 py-2">{props.releaseDate}</li>
      <li class=" px-4 py-2">{props.description}</li>
    </ul>
  

</div>
  );
};

export default CoinAdd;
