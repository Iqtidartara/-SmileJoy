import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Smile = () => {
  return (
    <section className="w-full ">
      <main className="max-w-[90rem] mx-auto md:py-[146px] py-12 md:px-14 px-4 flex flex-col md:flex-row sm:flex-col md:gap-[100px] gap-12">
       
        <div className="md:w-1/2 w-full">
          <p className="text-[#FF6947] text-[1.25rem] font-[400] leading-normal md:mb-4 mb-0">
          The SmileJoy Approach
          </p>
          <h1 className="textcolor md:text-[2.625rem] text-[2rem] font-[700] leading-[133.333%] tracking-[0.0525rem] ">
          Personalized Care for Your Unique Smile
          </h1>
          <p className="md:text-[1.25rem] text-[1rem] font-[400] leading-[185%] pcolor mt-[1.31rem]">
          At SmileJoy, every smile is a masterpiece. Our approach is tailored to your individual needs, ensuring you get the most effective and comfortable treatment. We combine state-of-the-art technology with a warm, personal touch, making your journey to a perfect smile as enjoyable as the results.
          </p>
          <Button
            className="borderbutton2 bg-[#FF7352] md:px-12 md:py-8 py-7 font-[500] text-[0.93519rem] leading-[150%] rounded-[10px] md:mt-[3rem] mt-8 w-full md:w-auto"
          >
            
            Book An Appointment
          </Button>
        </div>
        <div><Image
            src="/personalized.png"
            alt="tara"
            width={600}
            height={600}
            className="md:w-full md:h-[519px] w-fit h-fit"
          />
        </div>
      </main>
    </section>
  );
};

export default Smile;
