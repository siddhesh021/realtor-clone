import React from 'react'
import { useState } from 'react'
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';
import  {getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { db } from "../firebase";
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function SignUp() {

  const navigate = useNavigate()
  const [showpassword,setshowpassword]=useState(false)
  const [formdata,setformdata] = useState({
    name:'',
    email:'',
    password:'',
    
  });
  const {name,email,password} = formdata;
  function change(e){
    setformdata((prevState)=>({
      ...prevState,
      [e.target.id]:e.target.value
    })
  )}

  async function onSubmit(e) {
    e.preventDefault()
    try {
      const auth = getAuth();
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
      updateProfile(auth.currentUser, {
        displayName: name
      })

      const user = userCredentials.user;
  
      formdata.timestamp = serverTimestamp();

      // Saving data to firestore, users is collection name
      await setDoc(doc(db, 'users', user.uid), formdata)
      navigate('/')
      toast.success('Registration Completed')
    } catch (error) {
      toast.error("Please Fill all the fields")
    }
  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign Up</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAindiDaLEaTL1GmO_uRBKeWbm
            oJWO__oOcEzhV11FdPOj9zWOI2vUhWAvfOXUaUAz96Q&usqp=CAU"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>

          <input type='text'
            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 
            rounded transition ease-in-out"
            value={name}
            id='name'
            placeholder='Full Name'
            onChange={change}></input>

            <input
            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 
            rounded transition ease-in-out"
            type="email"
            value={email}
            id='email'
            placeholder='email'
            onChange={change}
            />

            {/* <input type='text'
            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 
            rounded transition ease-in-out"
            value={college}
            id='college'
            placeholder='College Name'
            onChange={change}></input>

            <input type='text'
            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 
            rounded transition ease-in-out"
            value={academicyear}
            id='academicyear'
            placeholder='Contact No'
            onChange={change}></input>

            <input type='text'
            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 
            rounded transition ease-in-out"
            value={stream}
            id='stream'
            placeholder='stream'
            onChange={change}></input>

            <input type='text'
            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 
            rounded transition ease-in-out"
            value={uid}
            id='uid'
            placeholder='Registration No'
            onChange={change}></input>

            <p className='mb-1 w-full px-4 py-0 text-xl text-gray-700 
            rounded transition ease-in-out'>Gender</p>
            <input type="radio" id="gender" value="gender" name='radAnswer'/>
            <label for="gender" className='mx-3'>Male</label>
            <input type="radio" id="gender" value="gender"  name='radAnswer'/>
            <label for="gender" className='mx-3'>Female</label>
          <input type="radio" id="gender" value="gender"  name='radAnswer'/>
            <label for="css" className='mx-3'>Other</label>

            <input type='text'
            className="mt-6 mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 
            rounded transition ease-in-out"
            value={nationality}
            id='nationality'
            placeholder='Nationality'
            onChange={change}></input>

            <input
            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 
            rounded transition ease-in-out"
            type="empstatus"
            value={empstatus}
            id='empstatus'
            placeholder='Employee Status'
            onChange={change}
            />

            <input
            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 
            rounded transition ease-in-out"
            type="category"
            value={category}
            id='category'
            placeholder='Category'
            onChange={change}
            /> */}

            <div className='relative'>
            <input type={showpassword?'text':'password'} 
            className="w-full px-4 py-2 text-xl text-gray-700 
            bg-white border-gray-300 rounded transition ease-in-out" 
            placeholder='Password'
            value={password}
            id='password'
            onChange={change}
            />

            {
              showpassword? <AiFillEye className='absolute right-3 top-3 cursor-pointer text-xl' 
                onClick={()=>setshowpassword((prevState)=>
              !prevState
            )}
              />:<AiFillEyeInvisible className='absolute right-3 top-3 cursor-pointer text-xl'
              onClick={()=>setshowpassword((prevState)=>
              !prevState
            )}
              />
            }
            </div>
            <div className='flex justify-between mt-3 mb-5 whitespace-nowrap text-sm sm:text-lg' >
              <p>Have a Account?<Link className='ml-1 text-red-600 hover:text-red-700 
              transition duration-200 ease-in-out' to='/sign-in'>Sign-In</Link></p>
              <Link className='text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out' 
              to='/forgot-password'>Forgot Password?</Link>
            </div>
            <button className='text-center w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium 
            uppercase rounded shadow-md hover:bg-blue-700 transition duration-100 ease-in-out 
            hover:shadow-lg active:bg-blue-800' type='submit'>Sign-Up</button>
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
