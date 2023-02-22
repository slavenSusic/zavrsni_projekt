import logo from '../img/pic1.png'
import Testimonals from './Testimonals'
// import CtaButton from './CtaButton'


const Hero = () => {
return (
    <div className="bg-slate-800">
        
      
        <div className="grid grid-cols-2 items-center min-[0px]:max-[641px]:flex flex-row ">
            <div className=''>
            <h1 className="font-bold pl-12 text-5xl text-transparent bg-clip-text bg-gradient-to-r 
            from-blue-400 to-pink-600 lg:text-7xl md:text-5xl p-10  max-[641px]:text-4xl">
            Create your cryptocurrency portfolio today
            </h1>
            <p className="pt-10 pl-12 text-2xl text-white sm:text-lg min-[0px]:max-[641px]:text-md pr-20 ">
            Cry/pro has a variety of features that make it the best place to start 
                {/* <CtaButton /> */}
                
            
            </p>
         
            </div>
          
            <div className='min-[0px]:max-[641px]:hidden'>
        <img className='' src={logo} alt="" />
    </div>
        </div>
        
        <Testimonals/>
   

    </div>
)

}

export default Hero;