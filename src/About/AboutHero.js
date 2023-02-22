import aboutPic from '../img/about-pic.webp'

const AboutHero = () => {
    return (
        <div className='grid grid-cols-2 items-center gap-40 py-10 mx-10 border-b-4 border-indigo-500
         sm:flex flex-col md:grid grid-cols-2 items-center gap-20 min-[0px]:max-[641px]:flex flex-col pr-5'>
        <div classsName=''>
          <h1 className='font-bold text-6xl py-10 max-[529px]:text-4xl'>About Cr/ypro</h1>
           <p className='text-xl'>We are building the cryptoeconomy – a more fair, accessible, efficient, and transparent financial system enabled by crypto.
  
          We started in 2012 with the radical idea that anyone, anywhere, should be able to easily and securely send and receive
           Bitcoin. Today, we offer a trusted and easy-to-use platform for
          accessing the broader cryptoeconomy.  </p></div>
  
        <div><img src={aboutPic} alt="Coin" /></div>
  
      </div>
    )
}

export default AboutHero ;