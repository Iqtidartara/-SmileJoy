import Image from 'next/image';
import React from 'react'
import Marquee from "react-fast-marquee";


const Testemonial = () => {
    const TestemonialData = [
        {
          title: " “ ",
          description:
            "“ SmileJoy's team of doctors are incredible! Their expertise and genuine concern for their patients make every visit a positive experience. I'm thankful for the personalized care that has significantly improved my eye health.”",
            url:"/test1.png",
            text:"Kevin Martin",
        },
        {
            title: " “ ",
            description:
              "I've trusted SmileJoy with my vision for years, and they never disappoint. The doctors' attention to detail and commitment to excellence are evident in every interaction. They've become more than just my eye care providers; Read more ",
              url:"/test2.png",
              text:"Bella Davis",
          },
          {
            title: " “ ",
            description:
              "SmileJoy's team of doctors are incredible! Their expertise and genuine concern for their patients make every visit a positive experience. I'm thankful for the personalized care that has significantly improved my eye health",
              url:"/test3.png",
              text:"Wonghen",
          },
          {
            title: " “ ",
            description:
              "“ SmileJoy's team of doctors are incredible! Their expertise and genuine concern for their patients make every visit a positive experience. I'm thankful for the personalized care that has significantly improved my eye health.” ",
              url:"/test4.png",
              text:"Sarah",
          },
    ]
  return (
  <section className='w-full bg-[#FFECE2]'>
    <main className='mx-auto max-w-[90rem] md:px-0 px-4 md:py-16 py-10'>
        <div className='text-center'>
        <p className="text-[#FF6947] text-[1.25rem] font-[400] leading-normal md:mb-4 mb-0">
        The SmileJoy Approach
          </p>
          <h1 className="textcolor md:text-[2.625rem] text-[2rem] font-[700] leading-[133.333%] tracking-[0.0525rem] ">
          Hear from Our Happy Smilers
          </h1>
        </div>
  
    {/* cards  */}
    <Marquee>
<div className="flex justify-center gap-6   px-4 rounded-[1.25rem] md:py-20 py-14">
          {TestemonialData.map((testemonial, index) => (
            <div
              key={index}
              className="w-[23.0625rem]   flex flex-col items-start 
             self-stretch bg-[#fff] shadow-xl rounded-[1.25rem] px-[2rem] py-[1rem]"
            >
              
              <h2 className="text-[#000] md:text-[3rem] font-[700] leading-[125%] mt-2 ">
                {testemonial.title}
              </h2>
              <p className="text-[#2F2F30] text-[0.9375rem] font-[400] leading-[159%] ">
                {testemonial.description}
              </p>
              <div className='flex   gap-2 items-center justify-start mt-4'>
    <Image
    src={testemonial.url}
    alt='testemonial'
    width={40}
    height={40} />
    <p className='text-[1rem] text-[#3F0000] font-[700] leading-[168.75%]'>{testemonial.text}</p>
</div>
            </div>
          ))}
        </div>
        </Marquee>
    </main>
  </section>
  )
}

export default Testemonial