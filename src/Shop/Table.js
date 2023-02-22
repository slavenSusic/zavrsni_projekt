
import TableItem from "./TableItem";
import { useEffect, useState } from "react";
import Searchicon from './SearchIcon'


const Table = () => {
  const [coin, setCoin] = useState([]);
  const [searchWord, setSeachWord] = useState("");
  

  const fetchData = () => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCoin(data);
        console.log(data)
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredCoins = coin.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord);
  });

  const coinList = filteredCoins.map((coin) => (
    <TableItem
      key={coin.id}
      id={coin.id}
      name={coin.name}
      img={coin.image}
      price={coin.current_price}
      t24h={coin.price_change_percentage_24h}
      supply={coin.circulating_supply}
      rank={coin.market_cap_rank}
    />
  ));
  const onChangeFilterHandler = (e) => {
    setSeachWord(e.target.value);
  };

  return (
    <div className="bg-gradient-to-b from-violet-900 via-black to-neutral-900 text-white pt-10  ">
     <table className=" mx-auto text-center text-xl ">
<tr className="grid grid-cols-8 text-xl md:grid-cols-7 min-[0px]:text-center 
max-[800px]:grid-cols-6 text-md  max-[638px]:grid-cols-5">
<th class=" min-[0px]:text-center max-[638px]:hidden">Rank</th>
<th class=" ">Name</th>
<th class="">Symbol</th>
<th class=" ">Price</th>
<th class="min-[0px]:text-center max-[800px]:hidden">24h change</th>
<th class="min-[320px]:text-center max-[1280px]:hidden ">Totaly Supply</th>
<th class=""><input className='ml-24 mb-5 text-black w-30 rounded-lg p-2 max-[450px]:ml-10 w-20 text-sm'
  type='text' placeholder="Search "
 onChange={onChangeFilterHandler}/></th>
</tr>
</table>
      <section className="">
        <ul className="">{coinList}</ul>
      </section>
    </div>
  );
};
export default Table;
