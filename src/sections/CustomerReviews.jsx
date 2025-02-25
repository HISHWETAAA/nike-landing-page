import React from 'react'
import ReviewCard from '../components/ReviewCard'
import { reviews } from '../constants'



const CustomerReviews = () => {
  return (
   <section className='max-container'>
    <h3 className='font-palanquin text-center text-4xl fond-bold'>What Our 
      <span className='text-coral-red'> Customers</span> Say?
    </h3>
    <p className='info-text mt4 max-w-lg text-center  m-auto'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>

      <div className='mt-24 flex flex-1 justify-evenly item-center gap-14 max-lg:flex-col'>
           {reviews.map((review)=>(

           <ReviewCard
           key={review.customerName}
           imgURL={review.imgURL}
           customerName={review.customerName}
           rating={review.rating}
           feedback={review.feedback}

           />
           ))}

      </div>

   </section>
  )
}

export default CustomerReviews
