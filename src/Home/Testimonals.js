import human1 from '../img/customer-1.jpg'
import human2 from '../img/customer-2.jpg'
import human3 from '../img/customer-3.jpg'
import human4 from '../img/customer-4.jpg'
import human5 from '../img/customer-5.jpg'
import human6 from '../img/customer-6.jpg'
import human7 from '../img/customer-7.jpg'
import human8 from '../img/customer-8.jpg'

const Testimonals= () => {
    return (
        <div className='flex p-10 items-center max-[416px]:flex-col items-center justify-center '>
        <div className='flex '>
            <img className='max-h-14 rounded-full ' src={human1} alt="" />
            <img className='-translate-x-8 max-h-14 rounded-full'  src={human2} alt="" />
            <img className='-translate-x-16 max-h-14 rounded-full'  src={human3} alt="" />
            <img className='-translate-x-24 max-h-14 rounded-full'  src={human4} alt="" />
            <img className='-translate-x-32 max-h-14 rounded-full'  src={human5} alt="" />
            <img className='-translate-x-40 max-h-14 rounded-full max-[400px]:hidden'  src={human6} alt="" />
            <img className='-translate-x-48 max-h-14 rounded-full max-[500px]:hidden'  src={human7} alt="" />
            <img className='-translate-x-56 max-h-14 rounded-full max-[500px]:hidden'  src={human8} alt="" />
        </div> 
        <div className='text-white'>
            <p className='-translate-x-52 text-lg italic md:-translate-x-48 sm:-translate-x-20 max-[641px]:translate-x-6 text-md max-[416px]:text-sm  '>Over 250 000 purchases this year</p>
        </div>
        </div>
    )
}

export default Testimonals;
