import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Carousel = () => {
  return (
    <section className='w-full'>
        <main className='max-w-[90rem] mx-auto md:px-12 px-4'>
            <div className='flex  items-center justify-between '> 
        <div>
            <p className='md:text-[1.25rem] text-[1rem] text-[#FF6947] font-[400] leading-normal'>Meet our Doctors</p>
            <h1 className='md:text-[2.625rem] text-[1.3rem] font-[700] textcolor leading-[133.333%] tracking-[0.0525rem]'>Meet Our Team.<br/> Your Health Matters.</h1>
        </div>
        <div className='flex gap-2 items-start'>
           <Image 
           src="/left.png"
           width={51}
           height={51}
           alt='carosel'/>
            <Image 
           src="/right.png"
           width={51}
           height={51}
           alt='carosel'/>
        </div>
        </div>
{/* carouodsel card */}
        <div className='bg-[#FFECE2] rounded-[1.64544rem] max-w-[77.5rem] mt-[2rem]'>

        <div className="md:py-[34px] py-6 md:px-[4rem] px-4 flex flex-col md:flex-row sm:flex-col md:gap-[100px] items-end gap-12">
        <div><Image
            src="/team.png"
            alt="tara"
            width={600}
            height={600}
            className="md:w-[400px] md:h-[400px] object-cover"
          />
        </div>
        <div className="md:w-1/2 w-full flex flex-col items-start justify-center gap-2">
          <p className="text-[#FF6947] md:text-[1.25rem] tex-[.9rem] font-[400] leading-normal">
          Medical Specialist
          </p>
          <h1 className="textcolor md:text-[2.625rem] text-[1.7rem] font-[700] leading-[133.333%] tracking-[0.0525rem] ">
          Dr. Sarah Davis
          </h1>
          <p className="md:text-[1.25rem] text-[1rem] font-[400] leading-[185%] pcolor ">
          Experience excellence with one of the best medical specialists in the field. Trust our seasoned professional for exceptional care and results.
          </p>
          <Button
            className="borderbutton2 bg-[#FF7352] md:px-12 md:py-8 py-7 font-[500] text-[0.93519rem] leading-[150%] rounded-[10px]  w-full md:w-auto mt-4"
          >
            
            Book An Appointment
          </Button>
        </div>
      </div>

        </div>
        </main>
    </section>
  )
}

export default Carousel