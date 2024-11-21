'use client';  
import React from 'react';  
import { BiCheckDouble } from "react-icons/bi";  
import { MdNotificationImportant } from "react-icons/md";

const CBCResources = () => {  
  return (  
    <div className="relative h-screen flex flex-col items-center">  
      <div className="absolute top-4 right-4">  
      <MdNotificationImportant size={20} className='text-white bg-primary-blue rounded-full w-10 h-10'/>  
      </div>  
      <div className="bg-white shadow-lg border-2 border-black rounded-lg p-6 h-500 w-500 text-center mt-16">  
        <h2 className="text-3xl font-bold text-pretty text-primary-amber">  
          Module one assessments submitted successfully  
          <br />  
          Looking for CBC Resources?  
        </h2>  
        <h3 className="text-xl mt-4">  
          Take a look into our trusted resources  
        </h3>  
        <a  
          href="https://kec.ac.ke/"  
          className="text-blue-500 hover:text-blue-700 transition-colors duration-300 mt-4 block" >  
          https://kec.ac.ke/  
        </a>  
        
        <div className="flex justify-center mt-10">  
          <BiCheckDouble className='text-primary-blue w-36 h-36 border-4 border-primary-amber rounded-full' />  
        </div>  

        <button className='border-2 border-primary-amber rounded-lg text-primary-amber mt-20 text-xl p-2'>  
         <a href=''>View Results  </a>
        </button>  
      </div>  
    </div>  
  );  
};  

export default CBCResources;