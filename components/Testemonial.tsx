import Image from 'next/image';
import React from 'react'
import Marquee from "react-fast-marquee";


const Testemonial = () => {
  return (
  <section className='w-full bg-[#FFECE2]'>
    <main className='mx-auto max-w-90rem py-16'>
        <div className='text-center'>
        <p className="text-[#FF6947] text-[1.25rem] font-[400] leading-normal md:mb-4 mb-0">
        The SmileJoy Approach
          </p>
          <h1 className="textcolor md:text-[2.625rem] text-[2rem] font-[700] leading-[133.333%] tracking-[0.0525rem] ">
          Hear from Our Happy Smilers
          </h1>
        </div>
  
    {/* cards  */}

<div className='rounded-[1.25rem] bg-[#FFF] p-4'>
<h5>“</h5>
<p>“ SmileJoy&apos;s team of doctors are incredible! Their expertise and genuine concern for their patients make every visit a positive experience. I&apos;m thankful for the personalized care that has significantly improved my eye health.”</p>
<div className='flex   gap-2 items-center justify-start'>
    <Image
    src="/test1.png"
    alt='testemonial'
    width={40}
    height={40} />
    <p>Kevin Martin</p>
</div>
</div>

    
    </main>
  </section>
  )
}

export default Testemonial