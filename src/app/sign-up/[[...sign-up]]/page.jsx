import { SignUp } from '@clerk/nextjs';
import React from 'react';

const SignUppage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary_color bg-cover bg-center">
         <div className="bg-[url('/signIn-bg.png')]  bg-cover h-screen w-1/2 hidden lg:flex justify-center items-center">
           <div>
             <p className='  font-semibold text-center tracking-[0.4rem] text-white text-2xl'>INSPIRED BY THE FUTURE: </p>
             <p style={{
               backgroundImage: "linear-gradient(97.89deg, #ffffff 70.67%, rgba(117, 122, 140, 0) 108.55%)",
               backgroundClip: "text",
               WebkitBackgroundClip: "text",
               WebkitTextFillColor: "transparent",
             }} className='mt-2  font-bold text-center tracking-widest  drop-shadow-[0_4px_10px_rgba(255,255,255,0.3)] text-white text-[45px]'> THE VISION UI DASHBOARD </p>
           </div>
   
         </div>
   
         <div className='lg:w-1/2 flex justify-center items-center  '>
           <SignUp
   
             appearance={{
               variables: {
   
               },
               elements: {
                 card: 'bg-transparent shadow-lg  ',
                 // This is the key change:
                 // Target the entire footer container, set its background, and remove the top border
                 footer: 'bg-transparent border-none clerk',
                 headerTitle: 'text-center text-white',
                 formFieldInput: 'border rounded px-3 py-2',
                 formButtonPrimary: 'bg-primary_blue',
   
   
               },
             }} fallbackRedirectUrl='/' path="/sign-up" routing="path" />
         </div>
   
       </div> 
  );
};

export default SignUppage;