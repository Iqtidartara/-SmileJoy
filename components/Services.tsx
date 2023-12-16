import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Services = () => {
  return (
    <section className='w-full'>
        <main className='max-w-[90rem] mx-auto  pt-32'>

<div>
    <p className='text-[1.25rem] text-[#FF6947] font-[400] leading-normal text-center'>Services</p>
    <h2 className='textcolor text-[2.625rem] font-[700] leading-[133.333%] tracking-[0.0525rem] text-center'>Your Doctor Services for <br/> Health and Wellness</h2>
</div>
{/* cards of services */}
<div className='w-full'>
<div className='flex flex-col items-center justify-center'>
<Image
src={"/general.png"} alt='general'
width={107}
height={107}
/>
<h2 className='text-[1.5rem] font-[600] leading-[111.833%] tracking-[0.02906rem] text-[#333] '>General</h2>
<p className='text-[#625D7E] font-[400] leading-[166.684%] text-[1.06244rem]'>Compassionate Care, Expertise, and Your Well-being - Your Trusted General Doctor.</p>
<Link href={"#"}>Learn more</Link>
</div>
</div>
        </main>
    </section>
  )
}

export default Services