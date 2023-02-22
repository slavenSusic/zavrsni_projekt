
import { useState, useEffect } from "react"
import axios from "axios"
import InfoCardAPI from "./InfoCardAPI";
import Classes from './History.Module.css'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from "moment/moment";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);


const History =(props)=> {
 
  const[searchHistory, setSeacrchHistory]=useState('bitcoin')
  const[period, setPeriod]=useState('30')
const [historys, setHistorys] = useState([])
  let url=`https://api.coingecko.com/api/v3/coins/${searchHistory}/market_chart?vs_currency=usd&days=${period}`
 const fetchDataHistory = async () => {
 await axios.get (url).then(res=> {
  
  setHistorys(res.data.prices)
})  
}
  useEffect(() => {
    fetchDataHistory()
  }, [searchHistory,period])

 const historyList= historys.map((historys) => (
  { x:historys[0],
    y:historys[1]

}))
const options = {
  responsive:true,
  maintainAspectRatio:false,

  plugins: {
    
      legend: {
          display: true,
          labels: {
              color: 'black',
              font: {
                size: 30
            }
          }
      }
    
  },
  
  scales: {
   
    y: {
      ticks: {
        color: 'blue',
        font: {
          size: 17,
        }
      }
    },
    x: {
      ticks: {
        color: 'blue',
        font: {
          size: 17,
        }
      }
    },
    
  }
}
const data = {
  labels: historyList.map(historys=>moment(historys.x).format('MMM DD Y')),
  
  datasets: [
    {
      fill:true,
      label:searchHistory.charAt(0).toUpperCase() + searchHistory.slice(1),
      data:historyList.map(historys=>historys.y),
      borderColor: 'rgb(93, 63, 211)',
   
    }
  ]
}


const ethHandler = () => {
  setSeacrchHistory('ethereum')
}
const btcHandler = () => {
  setSeacrchHistory('bitcoin')
}
const carHandler = () => {
  setSeacrchHistory('cardano')
}

const period7 = () => {
  setPeriod('7')
}
const period30 = () => {
  setPeriod('30')
}
const periodall = () => {
  setPeriod('max')
}

   
   
 
  return (
    <>
    
    <div className='max-w-full text-center bg-gradient-to-bl from-gray-900 viagray-600 to-gray-200 '>
    <InfoCardAPI />
    <h2 className="text-center text-5xl p-10 font-bold text-purple-400 max-[641px]: text-purple-500"  >Check the history graph</h2>
    <div className='flex justify-center '>
   

   <button className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={btcHandler}>Bitcoin</button>
   <button className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={ethHandler}>Ethereum</button>
   <button className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={carHandler}>Cardano</button>
   </div>
   <div className="flex justify-center py-5">
   <button className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={period7}>7 days</button>
   <button className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={period30}>30 days</button>
   <button className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={periodall}>All</button>
    </div>
    
  
   {/* <button onClick={btchandler}>BTC</button> */}
   <div className="w-3/5 h-2/3 relative pb-20 m-auto max-[624px]:w-3/4 h-1/3 max-[360px]:w-5/6 h-1/3 ">
    <Line 
    width={1100}
    height={600}
    options={options} data={data}/>
   </div>
      
   </div>
   </>
  );
  }
  
export default History;