'use client'
import Image from 'next/image';


const Teaser = () => {  
    return (  
      <div>
      <div>
      <Image src="/Images/SISU official.jpg" alt="teaser Image" layout="fill" objectFit="cover" />
      </div>
      <div className="absolute inset-0 bg-primary-blue bg-opacity-60 flex flex-col justify-center items-center text-center text-white  sm:p-6 md:p-8 lg:p-12">
        <div className="flex flex-col items-center space-y-2 sm:space-y-4">
          <h1 className="text-3xl w-4/5 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">WELCOME TO UJUZI </h1>
        </div>
        <p className="text-3xl sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 md:mb-16 mt-4 sm:mt-5 max-w-2xl">
        <i>Discover about CBC training and management </i> </p>
        <button className="border-2 border-primary-amber rounded-full bg-transparent text-primary-amber px-4 sm:px-6 py-2 sm:py-3 font-semibold hover:opacity-80 hover:bg-primary-amber hover:text-white transition text-lg sm:text-xl md:text-2xl lg:text-3xl">
        <a href='/Module1'>GET STARTED</a>
        </button>
      </div>
    </div>
    );  
};  
  
export default Teaser;



  
