import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {toast} from 'react-toastify'
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { useNavigate } from 'react-router-dom'

export default function OAuth() {
  const navigate = useNavigate()
  async function onGoogleSubmit() {
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user

      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()){
        await setDoc(docRef, {
          name:user.displayName,
          email:user.email,
          timestamp: serverTimestamp(),
        })
      }
      navigate('/')
    } catch (error) {
      toast.error('Something get wrong with Google')
      
    }
    return null
  }
  return (
    <button onClick={onGoogleSubmit} className='flex items-center justify-center bg-red-700 w-full text-white px-7 py-3 rounded uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out'>
    <FcGoogle className='mr-2 text-xl bg-white rounded-full' />Continue with Google</button>
  )
}
