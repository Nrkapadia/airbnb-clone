import React, { useState } from 'react'
import {GlobeAltIcon,MenuIcon,SearchIcon, UsersIcon,UserCircleIcon} from '@heroicons/react/solid'
import Image from "next/image"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {DateRangePicker} from "react-date-range"
import { useRouter } from 'next/dist/client/router';

function Header({placeholder}) {

  const [searchInput,setSearchInput]=useState('');
  const [startDate,setStartDate]=useState(new Date());
  const [endDate,setEndDate]=useState(new Date());
  const[numberOfGuest,setNumberOfGuest]=useState(1); 
  const router=useRouter();

  const selectionRange={
    startDate:startDate,
    endDate:endDate,
    key: 'selection',
  }

  const handleSelect=(ranges)=>{
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate);
  }

  const resetInput=()=>{
    setSearchInput("");
  }

  const search=()=>{
    router.push({
      pathname:'/search',
      query:{
        location : searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuest, 
      }
    })
  }

  return (  
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md px-5 py-3 md:px-10'>
        {/* Left */}
        <div onClick={()=>router.push("/")} className='relative transition transform flex items-center h-10 cursor-pointer my-auto hover:-translate-y-2 ease-in-out  hover:scale-100 duration-300'>
            <Image
                src="https://links.papareact.com/qd3"
                layout='fill'
                objectFit='contain'
                objectPosition='left'
            />
        </div>

        {/* Middle */}
        <div className=' px-0.5 flex items-center md:border-2 md:shadow-sm rounded-full py-2'>

          <input value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} className=' pl-5 flex-grow outline-none text-sm text-gray-600 placeholder-gray-600' type='text' placeholder={placeholder || 'What you missed last time'}  />

          <SearchIcon className='hidden md:inline-flex h-8 text-white bg-red-500 rounded-full p-2 cursor-pointer md:mx-2'/>

        </div>

        {/* Right */}
        <div className='flex space-x-3 items-center justify-end text-gray-600'>
          <div  className='hidden md:inline p-2 hover:bg-gray-100  hover:rounded-full cursor-pointer '>
          <p className='text-black'>Become a Host</p>
          </div>
          <div className='p-2 hover:bg-gray-100 rounded-xl cursor-pointer'>
          <GlobeAltIcon className='h-5 animate-spin fill-black' />
          </div>
          <div className='flex rounded-full border-2  items-center cursor-pointer'>
            <MenuIcon className='h-5 px-1 fill-black' />
            <UserCircleIcon className='h-9 fill-black' />
          </div>
        </div>
        
        {
          searchInput && (
            <div className='flex flex-col col-span-3 mx-auto mt-1'>
                <DateRangePicker 
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={["#FD5B61"]}
                onChange={handleSelect}
                />
                <div className='flex items-center border-b mb-4'>
                  <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
                  <UsersIcon className='h-5' />
                  <input type="number" value={numberOfGuest} onClick={()=>setNumberOfGuest(numberOfGuest + 1)} min={1} className='w-12 pl-2 outline-none text-lg text-red-400'/>
                </div>
                <div className='flex'>
                  <button onClick={resetInput} className='flex-grow font-Semibold hover:bg-gray-200  hover:rounded-full text-gray-500'>Cancel</button>
                  <button onClick={search} className='flex-grow font-Semibold hover:bg-gray-200  hover:rounded-full text-red-500'>Search</button>
                </div>
            </div>
          )
        }
    </header>
  )
}

export default Header