import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Option from "./Option";

const HomeSection = () => {
  return (
    <section className="w-full md:relative">
      <main className="max-w-[90rem] mx-auto py-0 md:py-0">
      <div
       className="flex flex-col md:flex-row items-start justify-between bg-[#FFECE2]">
        {/* hero section wala text */}
        <div className="md:px-12 px-4 py-20 md:w-1/2 w-full">
          <h1 className="md:text-[3.25rem] text-[1.8rem] md:leading-[128.846%] leading-[ 140%] font-[700] text-[#181443] tracking-[0.03988rem] md:text-start text-center">
            Transforming Your Smile into a Timeless{" "}
            <span className="text-[#FF6947]">Masterpiece</span> of Joy
          </h1>
          <p className="md:text-[1.125rem] text-[.9rem] text-[#625D7E] text-center md:text-start md:font-[500] font-[400] md:leading-[205.556%] leading-normal md:mt-[1.88rem] mt-2">
            Discover the joy of a perfect smile at SmileJoy! Expert care meets
            artistic flair to create a smile that&apos;s uniquely you. Brighten
            your world with a SmileJoy smile
          </p>

          {/* two Buttons whish is need  */}
          <div className="flex flex-col md:flex-row gap-[25px] md:items-center md:mt-[3rem] mt-6 w-full">
            <Button className="borderbutton2 bg-[#FF7352] md:px-12 md:py-8 py-7  font-[500] text-[0.93519rem] leading-[150%] rounded-[10px]
            ">
              Book An Appointment
            </Button>
            <Button
              variant="ghost"
              className="md:px-12 md:py-8 py-7 font-[700] text-[1rem] leading-[150%] rounded-[10px] bg-[#FFECE2] border textcolor gap-2 borderbutton"
            >
              <Image src="/callmehunter.png" alt="phone" width={20} height={20} />{" "}
              940-394-3344
            </Button>
          </div>
          {/* location and timer div */}
          <div className="flex flex-col md:flex-row gap-[17px] md:items-center items-start md:mt-[2.5rem] mt-10 ">
            {/* location */}
            <div className="flex items-center justify-center gap-[20px]">
              <Image
                src="/location.png"
                alt="location"
                width={51}
                height={51}
              />
              <div className="flex flex-col font-[700] text-[0.96125rem] leading-[150%] textcolor">
                <p>Address</p>
                <p>Brandenburgische Str. 87</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-[20px] ">
              <Image
                src="/adress.png"
                alt="location"
                width={51}
                height={51}
              />
              <div className="flex flex-col font-[700] text-[0.96125rem] leading-[150%] textcolor">
              <p>Opening Hours</p>
                <p>Mon-Fri 8:00 - 16:00</p>
              </div>
            </div>
          </div>
        </div>
        {/* hero image make it responsive for all size of screens. */}
        <div className="md:w-1/2  w-full flex justify-center items-center ">
          <Image

            src="/hero.png"
            alt="hero"
            width={769}
            height={865}
            
          />
        </div>
      </div>
      <Option />
      </main>
    </section>
  );
};

export default HomeSection;
