import React from 'react'
import {FcGoogle} from 'react-icons/fc'

export default function OAuth() {
  return (
    <button className='flex items-center justify-center bg-red-700 w-full text-white px-7 py-3 rounded uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out'>
    <FcGoogle className='mr-2 text-xl bg-white rounded-full' />Continue with Google</button>
  )
}
