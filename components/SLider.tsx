
'use client'
import React, { useRef } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Slider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const nextSlide = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  };

  const prevSlide = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  };

  return (
    <section className="w-full">
      <main className="max-w-[90rem] mx-auto md:px-12 px-4">
        <div className="flex flex-col md:flex-row  items-center justify-between ">
          <div>
            <p className="md:text-[1.25rem] text-[1.25rem] text-[#ff6947de] font-[400] leading-normal md:mb-4 mb-0 md:text-start text-center">
              Meet our Doctors
            </p>
            <h1 className="md:text-[2.625rem] text-[2rem] font-[700] textcolor md:leading-[133.333%] leading-normal tracking-[0.0525rem] text-center md:text-start md:mt-0 mt-3">
              Meet Our Team.
              <br /> Your Health Matters.
            </h1>
          </div>
          <div className="flex md:gap-2 gap-56 items-start md:mt-0 mt-6 md:mr-4 mr-0">
          <button onClick={prevSlide}>
              <Image
                src="/left.png"
                width={51}
                height={51}
                alt="carousel"
                className="md:w-[50px] md:h-[50px] w-[30px] h-[30px]  md:block hidden"
              />
            </button>
            <button onClick={nextSlide}>
              <Image
                src="/right.png"
                width={51}
                height={51}
                alt="carousel"
                className="md:w-[50px] md:h-[50px] w-[30px] h-[30px] md:block hidden"
              />
            </button>
          </div>
        </div>

        <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide"><div className="bg-[#FFECE2] rounded-[1.64544rem] max-w-[77.5rem] mt-[2rem]">
                      <div className="md:py-0 md:pt-[34px] pt-0 py-6 md:px-[4rem] px-4 flex flex-col md:flex-row sm:flex-col md:gap-[100px] items-end gap-12">
                        <div className="md:w-1/2 w-full flex items-center justify-center">
                          <Image
                            src="/team.png"
                            alt="tara"
                            width={600}
                            height={600}
                            className="md:w-[400px] md:h-[450px] object-cover"
                          />
                        </div>
                        <div className="md:w-1/2 w-full flex flex-col items-start justify-center gap-2 md:py-[24px] py-0 md:mb-10 mb-0">
                          <p className="text-[#FF6947] md:text-[1.25rem] text-[.9rem] font-[400] leading-normal">
                            Medical Specialist
                          </p>
                          <h1 className="textcolor md:text-[2.625rem] text-[1.7rem] font-[700] leading-[133.333%] tracking-[0.0525rem] md:mt-6 mt-0 ">
                            Dr. Sarah Davis
                          </h1>
                          <p className="md:text-[1.25rem] text-[1rem] font-[400] leading-[185%] pcolor  md:mt-4 mt-0">
                            Experience excellence with one of the best medical
                            specialists in the field. Trust our seasoned
                            professional for exceptional care and results.
                          </p>
                         <Link href="#contact-section" passHref>
                          <Button className="borderbutton2 bg-[#FF7352] md:px-12 md:py-8 py-7 font-[500] text-[0.93519rem] leading-[150%] rounded-[10px]  w-full md:w-auto mt-4 md:mt-10 ">
                            Book An Appointment
                          </Button>
                          </Link>
                        </div>
                      </div>
         </div></div>
        <div className="embla__slide"><div className="bg-[#FFECE2] rounded-[1.64544rem] max-w-[77.5rem] mt-[2rem]">
                      <div className="md:py-0 md:pt-[34px] pt-0 py-6 md:px-[4rem] px-4 flex flex-col md:flex-row sm:flex-col md:gap-[100px] items-end gap-12">
                        <div className="md:w-1/2 w-full flex items-center justify-center">
                          <Image
                            src="/team.png"
                            alt="tara"
                            width={600}
                            height={600}
                            className="md:w-[400px] md:h-[450px] object-cover"
                          />
                        </div>
                        <div className="md:w-1/2 w-full flex flex-col items-start justify-center gap-2 md:py-[24px] py-0 md:mb-10 mb-0">
                          <p className="text-[#FF6947] md:text-[1.25rem] text-[.9rem] font-[400] leading-normal">
                            Medical Specialist
                          </p>
                          <h1 className="textcolor md:text-[2.625rem] text-[1.7rem] font-[700] leading-[133.333%] tracking-[0.0525rem] md:mt-6 mt-0 ">
                            Dr. Sarah Davis
                          </h1>
                          <p className="md:text-[1.25rem] text-[1rem] font-[400] leading-[185%] pcolor  md:mt-4 mt-0">
                            Experience excellence with one of the best medical
                            specialists in the field. Trust our seasoned
                            professional for exceptional care and results.
                          </p>
                          <Link href="#contact-section" passHref>
                          <Button className="borderbutton2 bg-[#FF7352] md:px-12 md:py-8 py-7 font-[500] text-[0.93519rem] leading-[150%] rounded-[10px]  w-full md:w-auto mt-4 md:mt-10 ">
                            Book An Appointment
                          </Button>
                          </Link>
                        </div>
                      </div>
         </div></div>
        <div className="embla__slide"><div className="bg-[#FFECE2] rounded-[1.64544rem] max-w-[77.5rem] mt-[2rem]">
                      <div className="md:py-0 md:pt-[34px] pt-0 py-6 md:px-[4rem] px-4 flex flex-col md:flex-row sm:flex-col md:gap-[100px] items-end gap-12">
                        <div className="md:w-1/2 w-full flex items-center justify-center">
                          <Image
                            src="/team.png"
                            alt="tara"
                            width={600}
                            height={600}
                            className="md:w-[400px] md:h-[450px] object-cover"
                          />
                        </div>
                        <div className="md:w-1/2 w-full flex flex-col items-start justify-center gap-2 md:py-[24px] py-0 md:mb-10 mb-0">
                          <p className="text-[#FF6947] md:text-[1.25rem] text-[.9rem] font-[400] leading-normal">
                            Medical Specialist
                          </p>
                          <h1 className="textcolor md:text-[2.625rem] text-[1.7rem] font-[700] leading-[133.333%] tracking-[0.0525rem] md:mt-6 mt-0 ">
                            Dr. Sarah Davis
                          </h1>
                          <p className="md:text-[1.25rem] text-[1rem] font-[400] leading-[185%] pcolor  md:mt-4 mt-0">
                            Experience excellence with one of the best medical
                            specialists in the field. Trust our seasoned
                            professional for exceptional care and results.
                          </p>
                          <Link href="#contact-section" passHref>
                          <Button className="borderbutton2 bg-[#FF7352] md:px-12 md:py-8 py-7 font-[500] text-[0.93519rem] leading-[150%] rounded-[10px]  w-full md:w-auto mt-4 md:mt-10 ">
                            Book An Appointment
                          </Button></Link>
                        </div>
                      </div>
         </div></div>
      </div>
    </div>
        
      </main>
    </section>
  );
};

export default Slider;
