'use client'
import React from 'react';
import {useRouter} from 'next/navigation'
import {format} from "date-fns"
import Header from '../Header';
import responseSearch from '../../responseSearch.json'
import InfoCard from '../InfoCard';
import Map from '../Map';




export default function Search({
    params,
    searchParams,
  }: {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
  }) {
  
    const {location, startDate, endDate, numberOfGuests}= searchParams;
   // console.log(responseSearch)

    const formatedStartDate = format(new Date(startDate),"dd-MMMM-yy");
    const formatedEndDate = format(new Date(endDate),"dd-MMMM-yy");
    const range= `${formatedStartDate}-${formatedEndDate}`
  return (
    <div>
        <Header placeholder={`${location} | ${range} | ${numberOfGuests} guests`}/>
    <main className="flex">
        <section className="flex-grow pt-14 px-6">
            <p className="text-xs ">300+ Stays - {range} - for {numberOfGuests} guests</p>

            <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

            <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                <p className="buttonStyle">
                    Cancellation Flexibility</p>

                    <p className="buttonStyle">
                    Type of Places</p>

                    <p className="buttonStyle">
                    Price</p>

                    <p className="buttonStyle">
                    Rooms and Beds</p>

                    <p className="buttonStyle">
                    More Filters</p>

            </div>
<div className="flex flex-col">
{responseSearch?.map(result=>(
                <InfoCard 
                key={result.img} 
                img={result.img} 
                title={result.title}
                description={result.description}
                location={result.location}
                star={result.star}
                price={result.price}
                total={result.total}

                />
            ))}

</div>
           
        </section>

        <section className='hidden xl:inline-flex xl:min-w-[600px]'>
            <Map searchResult={responseSearch}/>
        </section>
    </main>
    </div>
  );
}

