import React, { useState } from 'react'
import { getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export default function Profile() {

  const navigate = useNavigate()

  const auth = getAuth()
  const [formdata, Setformdata] = useState({
    name:auth.currentUser.displayName,
    email:auth.currentUser.email,
  })

  const {name, email} = formdata

  function onLogout() {
    auth.signOut()
    navigate('/')
  }

  return (
    <section className='max-w-6xl mx-auto flex flex-col justify-center items-center'>
      <h1 className='mt-6 font-bold text-3xl text-center'>My Profile</h1>
      <div className='w-full md:w-[50%] mt-6 px-3 font-bold'>
        <form>
          <input type='text' id='name' value={name} disabled
          className='w-full px-4 py-2 text-gray-700 bg-white
          border border-gray rounded transition ease-in-out '></input>

          <input type='text' id='email' value={email} disabled
          className='w-full px-4 py-2 text-gray-700 bg-white
          border border-gray rounded transition ease-in-out mt-6'></input> <br></br>

          <div className='flex justify-between mt-4 whitespace-nowrap text-sm sm:text-lg'>
            <p className='flex items-center'> Do you want to change your name? 
            <span className='text-red-600 hover:text-red-700 transition ease-in-out 
            duration-200 ml-1 cursor-pointer'>Edit</span></p>
            <p onClick={onLogout} className='text-blue-600 hover:text-blue-800 transition ease-in-out 
            duration-200 cursor-pointer'>Sign Out</p>
          </div>
        </form>
      </div>
    </section>
  )
}
