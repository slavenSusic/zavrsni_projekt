import React from 'react';

import CoinAdd from './CoinAdd';





const CoinListAdd = (props) => {
  return (
    <div className='flex flex-col justify-center py-28 items-center bg-gradient-to-b from-neutral-900 via-black to-violet-900 text-white'>
    <ul className='flex text-2xl'>
      <li class="px-4 py-2">Name</li>
      <li class="px-4 py-2">Price</li>
      <li class="px-4 py-2">Relese Date</li>
      <li class="px-4 py-2">Descriptions</li>
      </ul>
    <ul className=''>
      {props.coins.map((coin) => (
        <CoinAdd
          key={coin.id}
          name={coin.name}
          price={coin.price}
          releaseDate={coin.releaseDate}
          description={coin.description}
        />
      ))}
    </ul>
    </div>
  );
};

export default CoinListAdd;
