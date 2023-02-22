
import {useEffect,useState} from 'react'
import CardAPI from "./CardAPI";

const InfoCardAPI = (props) => {
        const [card, setCard] = useState([])
              
      
    
        const fetchData = () => {
          fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Ccardano%k&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(response => {
              return response.json()
            })
            .then(data => {
                setCard(data)
                console.log(data)
              
           
            })
        }
      
        useEffect(() => {
          fetchData()
        }, [])
              
         

  return (
    <div>
    <CardAPI cardList={card} />
    
    </div>
  );
};
export default InfoCardAPI;
