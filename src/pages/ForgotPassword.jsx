import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import OAuth from '../components/OAuth';

export default function SignIn() {
  
  const [email,setemail] = useState('');
  function change(e){
    setemail(e.target.value)
  }
  async function onSubmit(e) {
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success("Email sent Successfully")
    } catch (error) {
      toast.error('Could not send resend Link')
    }
  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-1.2.1&ixid=
            MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
            <input
            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 
            rounded transition ease-in-out"
            type="email"
            value={email}
            id='email'
            placeholder='email'
            onChange={change}
            />
            <div className='flex justify-between mt-3 mb-5 whitespace-nowrap text-sm sm:text-lg' >
              <p>Don't Have Account?<Link className='ml-1 text-red-600 hover:text-red-700 
              transition duration-200 ease-in-out' to='/sign-up'>Register</Link></p>
              <Link className='text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out' 
              to='/sign-in'>Sign In Instead</Link>
            </div>
            <button className='text-center w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium 
            uppercase rounded shadow-md hover:bg-blue-700 transition duration-100 ease-in-out 
            hover:shadow-lg active:bg-blue-800' type='submit'>Send Reset Link</button>
              <div className='flex my-4 before:border-t before:flex-1 items-center
               before:border-gray-300 after:border-t after:flex-1 after:border-gray-300'>
                <p className='text-center font-semibold mx-4'>OR</p>
              </div>
              </form> 
              <OAuth />
              </div>
      </div>
    </section>
  )
}
