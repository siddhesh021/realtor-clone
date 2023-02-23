import React, { useState } from 'react'
import { getAuth, updateProfile } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { updateDoc } from 'firebase/firestore'
import { doc } from 'firebase/firestore'
import { db } from "../firebase";
import { FcHome } from 'react-icons/fc'

export default function Profile() {

  const navigate = useNavigate()

  const auth = getAuth()
  const [changeDetail, setchangeDetail] = useState(false)
  const [formdata, Setformdata] = useState({
    name:auth.currentUser.displayName,
    email:auth.currentUser.email,
  })

  const {name, email} = formdata

  function onLogout() {
    auth.signOut()
    navigate('/')
  }

  async function onSubmit() {
    try {
      if(auth.currentUser.displayName !== name) {
        // update displayName in firebase auth
        await updateProfile(auth.currentUser, {
          displayName: name,
        })
        // update name in firebase store
        const docRef = doc(db,'users',auth.currentUser.uid)
        await updateDoc(docRef, {
          name:name,
        })
      }
      toast.success("Profile Details Updated")
    } catch (error) {
      toast.error('Cannot Update')
    }
  }

  function onEdit() {
    changeDetail && onSubmit();
    setchangeDetail((prevState) => !prevState)
  }

  function onChange(e) {
    Setformdata((prevState) => ({
      ...prevState,
      [e.target.id] : e.target.value
  }))
  }

  return (
    <section className='max-w-6xl mx-auto flex flex-col justify-center items-center'>
      <h1 className='mt-6 font-bold text-3xl text-center'>My Profile</h1>
      <div className='w-full md:w-[50%] mt-6 px-3 font-bold'>
        <form>
          <input type='text' id='name' value={name} disabled={!changeDetail} onChange={onChange}
          className={`w-full px-4 py-2 text-gray-700 bg-white
          border border-gray rounded transition ease-in-out ${changeDetail && 'bg-red-200 focus:bg-red-200'} `}></input>

          <input type='text' id='email' value={email} disabled={!changeDetail} onChange={onChange}
          className={ `w-full px-4 py-2 text-gray-700 bg-white
          border border-gray rounded transition ease-in-out mt-6 ${changeDetail && 'bg-red-200 focus:bg-red-200'}`}></input>

          <div className='flex justify-between mt-4 whitespace-nowrap text-sm sm:text-lg'>
            <p className='flex items-center'> Do you want to change your name? 

            <span className='text-red-600 hover:text-red-700 transition ease-in-out 
            duration-200 ml-1 cursor-pointer' onClick={onEdit}>{changeDetail ? 'Apply Change' : 'Edit'}</span></p>

            <p onClick={onLogout} className='text-blue-600 hover:text-blue-800 transition ease-in-out 
            duration-200 cursor-pointer'>Sign Out</p>
          </div>
        </form>
        <button type='submit' className='w-full bg-blue-600 mt-4 text-white 
        uppercase px-7 py-3 text-sm font-medium rounded shadow-md 
        hover:bg-blue-700 transition duration-200 ease-in-out 
        hover:shadow-lg active:bg-blue-800'>
        <Link className='flex justify-center items-center' to='/createListing'>
        <FcHome className='mr-2 text-3xl bg-red-200 rounded-full p-1border-2'/>Sell or Rent
        </Link>
        </button>
      </div>
    </section>
  )
}
