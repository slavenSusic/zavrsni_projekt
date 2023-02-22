import logo from '../img/security.png'
import IconArrowRightCircleFill from './IconArrowRightCircleFill';
import { Slide } from 'react-awesome-reveal';

const Security = () =>{
    return (
    <div className="bg-gradient-to-bl from-slate-600 via-gray-800 to-black py-36">
        <Slide duration={2000}>
          <div className="text-white mx-28 text-6xl md:text-5xl sm:text-4xl xs:text-3xl min-[0px]:max-[641px]:mx-10">
          <h2 > <span className='border-b-4 border-indigo-500 '>Why to choose us</span></h2>
          </div>
       
    <div className="grid grid-cols-2 items-center md:grid-cols-1 text-left sm:grid-cols-1 ml-20 min-[0px]:max-[641px]:grid-cols-1">
    
        <div>
        <p className="py-10 mt-10 text-5xl text-white md:text-4xl sm:text-3xl xs:text-2xl min-[0px]:max-[641px]:mx-0">
            Your data is safe with us
        </p>
        <p className=" w-8/12 text-opacity-60 py-5 pl-10 text-m text-gray-100  md:text-s min-[0px]:max-[641px]:p-0">Blockchain technology produces a structure of data with inherent security qualities. It's based on principles of cryptography, decentralization and consensus, which ensure trust in transactions. In most blockchains or distributed ledger technologies (DLT), the data is structured into blocks and each block contains a transaction or bundle of transactions. Each new block connects to all the blocks before it in a cryptographic chain in such a way that it's nearly 
        impossible to tamper with. All transactions within the blocks are validated and agreed upon by a consensus mechanism, ensuring that each transaction is true and correct..</p>
        <p className=" w-8/12 text-opacity-60 py-5 pl-10 text-m text-gray-100 min-[0px]:max-[641px]:p-0">Lorem ipsum dolor sit amet, 
        Blockchain technology enables decentralization through the participation of members across a distributed network. There is no single point of failure and a single user cannot change the record of transactions. However, blockchain technologies differ in some critical security aspects..</p>
            <ul className="mx-12 text-gray-400 mt-6 ">
                <li className='flex gap-2 items-center'> <IconArrowRightCircleFill />Lorem ipsum dolor sit amet.</li>
                <li className='flex gap-2 items-center ' > <IconArrowRightCircleFill /> Lorem ipsum dolor sit amet.</li>
                <li className='flex gap-2 items-center' > <IconArrowRightCircleFill /> Lorem ipsum dolor sit amet.</li>
            </ul>
        
        </div>
        <div className='flex justify-center'>
    <img className='max-w-2xl -my-20 lg:max-w-xl md:w-3/4 sm:py-8 max-w-lg min-[0px]:max-[500px]:max-w-xs pr-20 mr-10 pt-14' src={logo} alt="" />
</div>
    </div>

    </Slide>
</div>)
}
export default Security;
