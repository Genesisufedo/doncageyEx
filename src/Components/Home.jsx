import React from 'react';
import { Slide, Zoom } from 'react-awesome-reveal';

const Home = () => {
  return (
    <div className=' contain flex w-[100%] md:w[80%] mx-auto justify-between items-center flex-col md:flex-row my-[100px] gap-[50px]'>

      <div className='container_body md:w[60%] w-[80%]'>
  
      <h1 className='text-black text-4xl pl-10  pb-4 uppercase text-shadow-lg shadow-green-600 bg-red-100 rounded-xl '>Welcome to Don Cagey</h1>
        
        <p className='text-black pl-6 pb-4 text-xl '>DE DONCAGEY is your sure guide to financal freedom. we're a supportive team dedicated to teaching you the art of profitable forex and crypto trading</p>
        
      
      </div>
    
      
      <img src='./doncagey.jpg'  alt='logo-image' className=' himg'/>
      
    </div>
  );
}

export default Home;
