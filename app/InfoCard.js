import { HeartIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';

export default function InfoCard({img, location,title, description, star, price,total}) {
  return (
    <div className='flex'>
        <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image src={img} fill style={{objectFit:'cover'}} />
        </div>

        <div className="flex flex-col flex-grow pl-5">
            <div className="flex justify-between">
                <p>{location}</p>
                <HeartIcon className="h-7 w-7 cursor-pointer"/>
                
            </div>

            <h4 className="text-xl ">{title}</h4>
            <div className="border-b w-10 pt-2 " />

            <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

            <div className='flex justify-between items-end'>
                <p className="flex items-center">
                    <StarIcon className="h-5 text-red-400"/>{star}
                </p>

                <div>
                    <p>{price}</p>
                    <p>{total}</p>
                </div>
            </div>
        </div>
    
    </div>
  );
}
