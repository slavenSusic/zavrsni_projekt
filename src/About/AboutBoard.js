
    const AboutBoard = () => {
        return (
            <>
            <div>
                <h1 className=' text-center text-3xl font-extrabold py-10 max-[450px]:text-xl'>Our board of directors</h1>
            </div>
            <div className='grid grid-cols-4 text-center py-10 gap-y-10 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 min-[0px]:max-[460px]:grid-cols-2'>
                <div className=''>
                    <h3 className='font-bold text-xl '> John Spliberg</h3>
                    <p className='text-gray-600 text-lg'> Co-Founder & Chief</p>
                    <p className='font-bold'> CEO</p>
                </div>
                <div>
                    <h3 className='font-bold text-xl'> Fred Wilson</h3>
                    <p className='text-gray-600 text-lg' > Co-Founder & Chief</p>
                    <p className='font-bold'> CTO</p>
                </div>
                <div>
                    <h3 className='font-bold text-xl'> Fred Ehrsam</h3>
                    <p className='font-bold' > CPO</p>
                </div>
                <div>
                    <h3 className='font-bold text-xl'> Katie Haun</h3>
                    <p className='text-gray-600 text-lg' > Board Director</p>
                   
                </div>
                <div>
                    <h3 className='font-bold text-xl' > Gokul Rajaram</h3>
                    <p className='text-gray-600 text-lg' > Board Director</p>
                </div>
                <div>
                    <h3 className='font-bold text-xl'> Marc Andreessen</h3>
                    <p className='text-gray-600 text-lg' > Board Director</p>
                
                </div>
                <div>
                    <h3 className='font-bold text-xl' > Kelly Kramer</h3>
                    <p className='text-gray-600 text-lg' > Board Director</p>
                </div>
                <div>
                    <h3 className='font-bold text-xl' > Tobias Lütke</h3>
                    <p className='text-gray-600 text-lg' > Board Director</p>
                </div>
            </div>
            </>
        )

    }
    export default AboutBoard