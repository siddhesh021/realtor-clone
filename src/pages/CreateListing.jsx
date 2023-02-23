import React, { useState } from 'react'

export default function CreateListing() {
    const [formdata, Setformdata] = useState({
        type:'rent',
        name:'',
        bedrooms:1,
        bathrooms:1,
        parking:false,
        furnished:false,
        address:'',
        description:'',
        offer:true,
        rprice:0,
        dprice:0,
        images:''
    })
    const {type, name, bedrooms, bathrooms, parking, furnished, address, description, offer, rprice, dprice, images} = formdata

    function onChange() { 

    }

  return (
    <main className='max-w-md px-2 mx-auto'>
        <h1 className='text-3xl text-center mt-6 font-bold'>Create a Listing</h1>
        <form>
            <p className='text-lg mt-6 font-semibold'>Sell / Rent</p>
            <div className='flex mt-2'>
            <button className={`px-7 py-3 font-medium text-sm uppercase
            shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
            transition duration-150 ease-in-out w-full mr-6
            ${type === 'rent' ? 'bg-white text-black':'bg-slate-600 text-white'}`} 
            type='button' id='type' value='sale' onChange={onChange}>SELL</button>
            <button className={`px-7 py-3 w-full font-medium text-sm uppercase shadow-md
            rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition 
            duration-150 ease-in-out ${type === 'sale'?'bg-white text-black':'bg-slate-600 text-white'}`}
            id='type' value='sale' type='button'>BUY</button>
            </div>

            <p className='text-lg mt-6 font-semibold'>Name</p>
            <input type='text' id='name' value={name} onChange={onChange} 
            placeholder='Enter Your Name' maxLength='32' minLength='10' required
            className='rounded w-full px-4 py-2 text-xl text-gray-700 mt-2 bg-white
            border border-gray-300 transition duration-150 ease-in-out 
            focus:bg-white focus:border-slate-600 mb-6'></input>

            <div className='flex mb-6'>
                <div className='mr-6'>
                    <p className='text-lg font-semibold mb-2'>Beds</p>
                    <input type='number' id='bedrooms' value={bedrooms}
                    onChange={onChange} minLength='1' maxLength='50' required
                    className='px-4 py-2 text-xl text-gray-300 bg-white text-center
                    border border-gray-700 rounded transition duration-150 ease-in-out
                    focus:text-gray-700 focus:bg-white focus:border-slate-600 w-full'></input>
                </div>
                <div>
                    <p className='font-semibold text-lg mb-2'>Baths</p>
                    <input type='number' id='bathrooms' value={bathrooms}
                    onChange={onChange} minLength='1' maxLength='50' required
                    className='px-4 py-2 text-xl text-gray-300 bg-white text-center
                    border border-gray-700 rounded transition duration-150 ease-in-out
                    focus:text-gray-700 focus:bg-white focus:border-slate-600 w-full'></input>
                </div>
            </div>

            <p className='text-lg mt-6 font-semibold'>Parking Spot</p>
            <div className='flex mt-2'>
            <button className={`px-7 py-3 font-medium text-sm uppercase
            shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
            transition duration-150 ease-in-out w-full mr-6
            ${!parking ? 'bg-white text-black':'bg-slate-600 text-white'}`} 
            type='button' id='parking' value={true} onChange={onChange}>YES</button>
            <button className={`px-7 py-3 w-full font-medium text-sm uppercase shadow-md
            rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition 
            duration-150 ease-in-out ${parking ?'bg-white text-black':'bg-slate-600 text-white'}`}
            id='parking' value={false} type='button'>NO</button>
            </div>

            <p className='text-lg mt-6 font-semibold'>Furnished</p>
            <div className='flex mt-2'>
            <button className={`px-7 py-3 font-medium text-sm uppercase
            shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
            transition duration-150 ease-in-out w-full mr-6
            ${!furnished ? 'bg-white text-black':'bg-slate-600 text-white'}`} 
            type='button' id='furnished' value={true} onChange={onChange}>YES</button>
            <button className={`px-7 py-3 w-full font-medium text-sm uppercase shadow-md
            rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition 
            duration-150 ease-in-out ${furnished ?'bg-white text-black':'bg-slate-600 text-white'}`}
            id='furnished' value={false} type='button'>NO</button>
            </div>

            <p className='text-lg font-semibold mt-6 mb-2'>Address</p>
            <textarea type='text' id='address' value={address} onChange={onChange}
            placeholder='Enter Your Address' required
            className='rounded border border-gray-300 transition duration-150 ease-in-out w-full 
            text-xl text-gray-700 bg-white px-4 py-2 focus:bg-white focus:border-slate-600'></textarea>

            <p className='text-lg font-semibold mt-6 mb-2'>Description</p>
            <textarea type='text' id='description' value={description} onChange={onChange}
            placeholder='Enter Description' required
            className='rounded border border-gray-300 transition duration-150 ease-in-out w-full 
            text-xl text-gray-700 bg-white px-4 py-2 focus:bg-white focus:border-slate-600 mb-6'></textarea>

            <p className='text-lg font-semibold mb-2'>Offer</p>
            <div className='flex mt-2 mb-6'>
            <button className={`px-7 py-3 font-medium text-sm uppercase
            shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
            transition duration-150 ease-in-out w-full mr-6
            ${!offer ? 'bg-white text-black':'bg-slate-600 text-white'}`} 
            type='button' id='offer' value={true} onChange={onChange}>YES</button>
            <button className={`px-7 py-3 w-full font-medium text-sm uppercase shadow-md
            rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition 
            duration-150 ease-in-out ${offer ?'bg-white text-black':'bg-slate-600 text-white'}`}
            id='offer' value={false} type='button'>NO</button>
            </div>

            <div className='mb-6'>
                    <p className='text-lg font-semibold mb-2'>Regular Price</p>
                    <div className='flex w-full items-center space-x-6'>
                    <input type='number' id='rprice' value={rprice}
                    onChange={onChange} minLength='10' maxLength='4000000' required
                    className='px-4 py-2 text-xl text-gray-300 bg-white text-center
                    border border-gray-700 rounded transition duration-150 ease-in-out
                    focus:text-gray-700 focus:bg-white focus:border-slate-600 w-full'></input>

                    {type === 'rent' && (
                        <div>
                        <p className='font-semibold text-md mb-2 text-center w-full whitespace-nowrap'>$/month</p>
                        </div>
                    )}
                    </div>
            </div>

            {offer && (
                <div>
                <p className='text-lg font-semibold mb-2'>Discounted Price</p>
                <input className='w-full px-4 py-2 text-xl rounded transition duration-150 ease-in-out bg-white
                text-gray-300 text-center border border-gray-700 focus:text-gray-700 focus:bg-white
                focus:border-slate-600 mb-6'
                type='number' id='dprice' value={dprice} onChange={onChange}
                minLength='10' maxLength='4000000' required={offer}></input>
            </div>
            )}

            <div className='mb-6'>
                <p className='text-lg font-semibold'>Images</p>
                <p className='text-sm font-semibold mb-2'>The first image will be the cover (max 6)</p>
                <input type='file' id='images' accept='.jpg,.png,.jpeg' multiple required onChange={onChange}
                className='px-4 py-2 bg-white rounded text-gray-300 border border-gray-700
                focus:bg-white focus-border-slate-600 focus:text-gray-700 transition duration-150 ease-in-out'></input>
            </div>

            <button type='submit' 
            className='mb-6 bg-blue-600 w-full px-7 py-3 text-white font-medium text-sm rounded uppercase
            shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800
            active:shadow-lg transition duration-150 ease-in-out'>Create Listing</button>
        </form>
    </main>
  )
}
