import axios from "axios";
import { useEffect, useState } from "react"

const useAxios = () => {
    const [coin, setCoin] = useState([])

    const fetchData = () => {
      fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'")
        .then(response => {
          return response.json()
        })
        .then(data => {
         setCoin(data)
        //   console.log(data)
        })
    }
  
    useEffect(() => {
      fetchData()
    }, [])
    
  
    return (
      <div>
        {coin.length > 0 && (
          <ul>
            {coin.map(coin => (
              <li classname='flex' key={coin.id}>
                {coin.name} 
              <img className="w-6" src={coin.image} alt={coin.name} />
              {coin.current_price}
              </li>
              
            ))}
          </ul>
        )}
      </div>
    )
}

export default useAxios