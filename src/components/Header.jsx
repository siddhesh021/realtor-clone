import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useLocation,useNavigate } from 'react-router-dom'

export default function Header() {

  const [pageState, setpageState] = useState('Sign In')
  const  location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setpageState("Profile")
      }else {
        setpageState("Sign In")
      }
    })
  })

  function pathMatch(route){
  if(route===location.pathname){
    return true
  }
}
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-40'>
    <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
      <div>
        {/* <img src='https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg' alt='logo' 
        className='h-5 cursor-pointer' onClick={()=>navigate('/')}></img> */}
      </div>
      <div>
        <ul className='flex space-x-10'>
          <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
          ${pathMatch("/") && "text-black border-b-red-500"}`} onClick={()=>navigate('/')}>Home</li>

          <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
          ${(pathMatch("/sign-in") || pathMatch("/profile")) && "text-black border-b-red-500"}`} 
          onClick={()=>navigate('/profile')}>{pageState}</li>

          <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
          ${pathMatch("/offers") && "text-black border-b-red-500"}`} onClick={()=>navigate('/offers')}>Offers</li>
          
        </ul>
      </div>
    </header>
    </div>
  )
}
