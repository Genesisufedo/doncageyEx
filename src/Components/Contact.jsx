import React from 'react';
import { Link } from 'react-router-dom';
import emailjs from "emailjs-com"
import { Slide} from 'react-awesome-reveal'

const Contact = () => {
    function sendEmail(event) {
        event.preventDefault();
        emailjs.sendForm(
            import.meta.env.VITE_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            event.target,
            import.meta.env.VITE_EMAIL_USER_ID,
            
        )
        .then((result) => {
            console.log("email sent successfully")
        })
        .catch(error =>{
            console.log("error sending email:", error)
        } )

    }
  return (
    <>
    <div className='cards flex flex-wrap w-[100%] m:d w[100%] mx-auto gap-[100px] justify-center' >
        <div className='card_body md:w[100%] p-4 w-[600px] shadow-sm rounded-xl'>
            <h2 className='text-center py-10 text-xl uppercase font-semibold border-y border-indigo-500 ' > Join our whatsapp group</h2>
            <h1 className=' text-xl pt-[25%] pb-6 ' >Are you a Crypto enthusiast looking for verified crypto mining and airdrop projects to participate in? Look no more.Join our WhatsApp group to delve into the world of crypto mining and discover exclusive airdrops! Learn how to mine various cryptocurrencies and seize opportunities to earn free tokens through airdrops </h1>
            <Link to = 'https://chat.whatsapp.com/HAszj5pYCj0J8ASNsezDwU' ><button className=' text-xl   bg-blue-300 hover:bg-blue-500 rounded-md px-4 py-3 w-full    ' >click here to join</button></Link>
        </div>
        <div className='my-6  max-w-md bg-white-200 ' >
            <h1 className='text-center py-10 text-xl uppercase font-semibold border-y border-indigo-500 '>Contact us</h1>
            <Slide>
            <form action="" onSubmit={sendEmail} className='mt-8 space-y-4' >
                <input type="text" placeholder='Name' className='w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500 ' /> 
                <input type="text" placeholder='Email' name='email_from' className='w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500 ' />
                <textarea placeholder='Message'  rows="6" name='message' className='w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500 '>
                   
                </textarea>
                <button  className='text-black bg-blue-300 hover:bg-blue-500 font-semibold rounded-md text-sm px-4 py-3 w-full '  >Send</button>
            </form>
            </Slide>
        </div>
    </div>
    </>
  );
}

export default Contact;
