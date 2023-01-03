//'use client'
import Image from 'next/image';
import React from 'react';
import {MagnifyingGlassIcon, Bars3Icon,
    UserCircleIcon, UserIcon, GlobeAltIcon
} from '@heroicons/react/24/solid'

export default function Header() {
  return (
    <header className='sticky top-0 z-50 grid  grid-cols-3 bg-white 
    shadow-lg p-5 md:px-10 '>
    
    {/* left */}
    <div className='relative flex items-center h-10 cursor-pointer my-auto '>
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
placeholder='Start Your Search'
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
    </header>
  );
}
