"use client"
import { SignOutButton, SignUp, useUser } from '@clerk/nextjs';
import { ArrowRightCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const SignUppage = () => {
  const { user } = useUser()
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
        {
          user ? (
            <div className='border-[1px] border-gray-700 shadow-md shadow-gray-600 rounded-lg  text-white w-[500px] h-[300px] p-10'  >
              <h2 className='text-lg capitalize font-semibold '>Welcome Back , {user.firstName} {user.lastName}</h2>

              <p className=' text-sm capitalize my-1 '>you're already signed Up  </p>
              <div className='text-center pt-10'>
                <Link href={'/AdminDashboard'} className='bg-gradient-to-r from-blue-600 to-blue-400 hover:opacity-90 transition-opacity px-5 py-2 rounded-md capitalize '>go to Dashboard</Link>

                <p className='mt-4'>OR</p>
                <div className='text-gray-400  flex m-auto w-full mt-3'>
                  <SignOutButton redirectUrl='/AdminDashboard'>
                    <button className='w-full flex items-center justify-center gap-1'>Sign Out  <ArrowRightCircle size={18} style={{ marginTop: '5px' }} />
                    </button>
                  </SignOutButton>


                </div>

              </div>

            </div>
          ) : (
            <div className='mt-20'>
              <SignUp

                appearance={{
                  variables: {

                  },
                  elements: {
                    card: 'bg-transparent shadow-lg  ',
                    footer: 'bg-transparent border-none clerk',
                    headerTitle: 'text-center text-white',
                    headerSubtitle: 'text-gray-400',

                    formFieldInput: 'border rounded px-3 py-2',
                    formButtonPrimary: 'bg-primary_blue',
                    dividerText: 'text-white',


                  },
                }} fallbackRedirectUrl='/AdminDashboard' path="/AdminDashboard/sign-up" routing="path" />

            </div>

          )
        }

      </div>

    </div>
  );
};

export default SignUppage;