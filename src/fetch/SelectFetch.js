import { useEffect, useState } from "react"
import TableItem from "../Shop/TableItem"
const SelectFetch =()=> {
    const [coin, setCoin] = useState([])

  const fetchData = () => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setCoin(data)
        console.log(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])


  const coinList = coin.map((coin) => (

    <TableItem key=
    {coin.id}
    id={coin.id}
    
     name={coin.name}
     
     img={coin.image}
     price={coin.current_price}
     t24h={coin.price_change_percentage_24h}
     supply={coin.circulating_supply}
     rank={coin.market_cap_rank
     }
  
  
    
     />
   
  
  ));
  return (
    <>
    <div className="bg-gradient-to-br from-black via-slate-600 to-black text-white">
    
      <div className="ml-14 grid grid-cols-7">
   
        <h3 className=""></h3>
     
        <h3 className="">Name</h3>
  
        <h3 className="">Symbol</h3>
        <h3 className="">Price</h3>
        <h3 className="">24h change</h3>
        <h3 className="">Totaly Supply</h3>
        <h3 className=""></h3>
       
      </div>
      
   
      <section className="">
  
        <ul className="">{coinList}</ul>
     
      </section>
    </div>
    </>
  );
}
export default SelectFetch;