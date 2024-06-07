import React from 'react';

const About = () => {
  return (
    <>
    <div id='about' >
    <h1 className='text-center text-blue-400 text-5xl pb-6  '>Motivation</h1>
    <div className='cards flex flex-wrap w-[90%] m:d w[80%] mx-auto gap-[30px] justify-center'>
      <div className='card_body md:w[30%] p-4 w-[500px] shadow-xl bg-blue-200 rounded-xl'>
        <h3 className=' text-center text-2xl '>motivation 01</h3>
        <p>your time is limited do not wast it doing trial and error. get a mentor,coach or someone who has done it before you to show you how. leverage on other peopless knowledge,time and experience</p>

      </div>
      <div className='card_body md:w[30%] p-4 w-[500px] shadow-xl bg-blue-200 rounded-xl'>
        <h3 className=' text-center text-2xl font-bold'> motivation 02</h3>
        <p>th quickest way to succed is to start now and figure it out as you go. you can learn to drive in a parked car</p>
      </div>
    </div>
    </div>
    </>
  );
}

export default About;
