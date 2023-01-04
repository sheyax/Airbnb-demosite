
import React from 'react';
import Banner from './Banner';
import Header from './Header'
import SmallCard from './SmallCard';
import response from '../response.json'
import responseCard from '../responseCard.json'
import MediumCard from './MediumCard';
import LargeCard from './LargeCard';
import Footer from './Footer';
export default async function HomePage() {




  return (
    <div>
     {/* <Header/> */}
     <Header/>
     <Banner/>

     <main className="max-w-7xl mx-auto px-8 sm:px-16  ">
      <section>
        <h2 className='text-4xl font-semibold pb-5 pt-6'>Explore Nearby</h2>

        {/* pull data from server */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {response?.map((item)=>(
          
          <SmallCard key={item.location }img={item.img} distance={item.distance} location={item.location}/>
        ))}

        </div>
       
      </section>

      <section>
        <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>

<div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3">
{responseCard?.map(item=> (
          <MediumCard key={item.img} img={item.img} title={item.title}/>
        ))}

</div>
       
      </section>

      <LargeCard 
      img='https://links.papareact.com/4cj'
      title='The Greatest Outdoors'
      description='Wishlists curated by Airbnb'
      buttonText='Get Inspired'/>
     </main>

     
    </div>
  );
}
// export async function getStaticProps(){
// const exploreData = await  fetch('https://links.papareact.com/pyp')
// .then(
//   (res)=> res.json()
// );

// //console.log(exploreData)


// const cardsData= await fetch('https://links.papareact.com/zp1').then(res => res.json())
// return {
//   props:{
//     exploreData: exploreData,
//     cardsData: cardsData
//   }
// }
// }



