'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import {MagnifyingGlassIcon, Bars3Icon,
    UserCircleIcon, UserIcon, GlobeAltIcon, UserGroupIcon
} from '@heroicons/react/24/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/navigation';


export default function Header({placeholder}) {

    const [searchInput, setSearchInput]= useState('')
    const [startDate, setStartDate]= useState(new Date())
    const [endDate, setEndDate]= useState(new Date())
    const [numberOfGuests, setNumberOfGuests]= useState(1)

    const router= useRouter()
    const selectionRange={
        startDate: startDate,
        endDate: endDate,
        key:'selection'

    }

    const handleSelect= (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const resetInput= () => {
        setSearchInput('');
    }

    const search= () => {
        router.push(`/search?location=${searchInput}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&numberOfGuests=${numberOfGuests}`)
        setSearchInput('');
    }
  return (
    <header className='sticky top-0 z-50 grid  grid-cols-3 bg-white 
    shadow-lg p-5 md:px-10 '>
    
    {/* left */}
    <div 
    onClick={()=> router.push("/")}
    className='relative flex items-center h-10 cursor-pointer my-auto '>
        <Image 
        src='https://links.papareact.com/qd3'
        fill
        style={{objectFit:"contain", objectPosition:"left"}}
        />
    </div>
    {/* Middle- search section */}
    <div className='flex items-center md:border-2 rounded-full 
    py-2 md:shadow-lg '>
<input type="text"
value={searchInput}
onChange={(e)=> setSearchInput(e.target.value)}
placeholder={placeholder ||'Start Your Search'}
className='flex-grow pl-5 bg-transparent outline-none text-sm  text-gray-600 placeholder-gray-400'
 />
<MagnifyingGlassIcon  className=' hidden md:inline-flex h-8
 text-white bg-red-400 
rounded-full p-2 cursor-pointer md:mx-2'/> 
 
    </div>

    {/* Right */}
    <div className='flex items-center space-x-4 justify-end text-gray-500 '>
<p className='hidden md:inline cursor-pointer'>Become a host </p>
<GlobeAltIcon className='h-6 cursor-pointer'/>

<div className='flex border-2 rounded-full p-2 items-center space-x-2'>
    <Bars3Icon className='h-6'/>
    <UserCircleIcon className='h-6'/>
</div>
    </div>

    {searchInput && (
        <div className='flex flex-col col-span-3 mx-auto mt-2'>
            <DateRangePicker 
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
        onChange={handleSelect}
            />

            <div className="flex items-center border-b mb-4">
                <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
                <UserGroupIcon className='h-5'/>
                <input type="number"
                value={numberOfGuests}
                min={1}
                onChange={e=> setNumberOfGuests(e.target.value)}
                 className="w-12 pl-2 text-lg outline-none text-red-400" />
            </div>

            <div className='flex'>
                <button 
                className="flex-grow text-gray-500"
                onClick={resetInput}>Cancel</button>

                <button 
                onClick={search}
                className="flex-grow text-red-400">
                    Search</button>
            </div>
        </div>
    )}
    </header>
  );
}
