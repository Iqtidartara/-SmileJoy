// import { motion } from "framer-motion"
import React from 'react'
import Image from 'next/image'


// const container = {
//   hidden: { opacity: 1, scale: 0 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       delayChildren: 0.3,
//       staggerChildren: 0.2
//     }
//   }
// }
// const item = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1
//   }
// };

const Services = () => {
    const cardData = [
        {
          url: "/general.png",
          title: "General",
          description:
            "Compassionate Care, Expertise, and Your Well-being - Your Trusted General Doctor.",
        },
        
        {
            url: "/Nutition.png",
            title: "Nutrition",
            description:
              "Discover the Power of Nourishing Your Body and Mind for Lasting Joy and Vitality.",
          },
          {
            url: "/Pediatrics.png",
            title: "Pediatrics",
            description:
              "Empowering Young Lives: Nurturing Wellness Through Progressive Pediatric Care",
          },
          {
            url: "/Cardiology.png",
            title: "Cardiology",
            description:
              "Revolutionizing Cardiology Through Innovative Ultricies Solutions",
          },
          {
            url: "/Orthopedics.png",
            title: "Orthopedics",
            description:
              "Precision Orthopedic Mastery: Elevating Mobility for an Active and Pain-Free Life in Motion.",
          },
          {
            url: "/opthlmology.png",
            title: "Ophthalmology",
            description:
              " Ophthalmology's Commitment to Vision Precision and Eye Wellness",
          },
      ];
  return (
    <section className='w-full'>
        <main className='max-w-[70rem] mx-auto px-4 md:py-32 py-12'>

<div>
    <p className='md:text-[1.25rem] text-[1rem] text-[#FF6947] font-[400] leading-normal text-center md:mb-6 mb-0'>Services</p>
    <h2 className='textcolor md:text-[2.625rem] text-[2rem] font-[700] md:leading-[133.333%] leading-[1] tracking-[0.0525rem] text-center md:mt-auto mt-4'>Your Doctor Services for <br className='md:block hidden'/> Health and Wellness</h2>
</div>
{/* cards of services */}
<div
// variants={container}
// initial="hidden"
// animate="visible"

className='container grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-14 mt-16 max-w-[77.46806rem]'>
{cardData .map((items ,index) => (

<div key={index}   className="inline-flex flex-col items-center md:gap-5 gap-2 ">
    <Image
      src={items.url}
      alt="doctor"
      width={107}
height={107}
/>
 
    <h2 className='text-[1.5rem] font-[600] md:leading-[111.833%] leading-normal tracking-[0.02906rem] text-[#333] text-center'>
      {items.title}
    </h2>
    <p className='text-[#625D7E] font-[400] md:leading-[166.684%] leading-normal text-[1.06244rem] text-center md:px-0 px-8 '>
      {" "}
      {items.description}
    </p>
    
  </div>
))}

</div>

        </main>
    </section>
  )
}

export default Services

