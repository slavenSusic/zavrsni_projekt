import logo from '../img/moon.png'
// import { Hinge } from "react-awesome-reveal";
    const DeployCoinHero =() => {
        return (
            
            <div className=' lg:pl-20 text-7xl 
            font-extrabold bg-gradient-to-b from-neutral-900 via-black 
            violet-900 text-white grid grid-cols-2 items-center
        '>
             {/* <Hinge triggerOnce='true'> */}
                <h1 className='xs:text-3xl sm:text-3xl md:text-5xl p-5 lg:text-7xl  pl-5'>
                    Don't like our Coins ?<br></br> Fine, make your own!
                </h1>
                
                <img className='' src={logo} alt='rocket to moon'/>
                {/* </Hinge> */}
            </div>
        )
    }

    export default DeployCoinHero