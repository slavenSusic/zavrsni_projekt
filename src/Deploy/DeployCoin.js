import React, { useState, useEffect, useCallback } from 'react';

import CoinListAdd from '../Shop/CoinListAdd';
import AddCoin from './AddCoin';
import DeployCoinHero from './DeployCoinHero';


function DeployCoin() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCoinsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://react-http-1b802-default-rtdb.europe-west1.firebasedatabase.app/coins.json');
     

      const data = await response.json();
      const loadedCoins=[];
      for (const key in data) {
        loadedCoins.push({
          id:key,
          name:data[key].name,
          price:data[key].price,
          description:data[key].description,
          releaseDate:data[key].releaseDate
        })
      }

      
      setCoins(loadedCoins);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchCoinsHandler();
  }, [fetchCoinsHandler,]);

 async function addCoinHandler(coin) {
  const response =await fetch('https://react-http-1b802-default-rtdb.europe-west1.firebasedatabase.app/coins.json',{
    method:'POST',
    body:JSON.stringify(coin),
    headers:{
      'Content-Type':'application/json'
    }
})
const data=await response.json();
console.log(data)
}

  let content = '';

  if (coins.length > 0) {
    content = <CoinListAdd coins={coins} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <DeployCoinHero />
      <section className='bg-gradient-to-b from-violet-900 via-black to-neutral-900 text-white'>
        <AddCoin onAddCoin={addCoinHandler} onReleseCoin={fetchCoinsHandler} />
      </section>
      <section>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default DeployCoin;
