import Image from "next/image";
import React from "react";
import {motion } from "framer-motion"

const Option = () => {
  return (
    <section className="w-full md:-mt-20 mt-4   md:px-10 px-2 md:absolute  left-0 top-[760px] ">
      <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .5 }} className="max-w-[90rem] mx-auto px-[2rem] py-[2rem]  flex flex-col sm:flex-row md:flex-row md:items-center items-start justify-between gap-12 option  ">
        <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .5 }}
      className="flex flex-col items-start justify-center">
         
          <h1 className=" text-[#0A1834] text-[1.45313rem] font-semibold leading-[135%] tracking-[-0.03025rem]">
            Working
          </h1>
          <h2 className="text-[#0A1834] text-[1.45313rem] font-semibold leading-[135%] tracking-[-0.03025rem]">
            Hours
          </h2>

          <div className="flex items-center justify-center gap-[15px] mt-[3rem]">
            <Image src="/timer.png" alt="timer" width={250} height={250} className="w-[38px] h-[38px]" />
            <div className="flex flex-col items-start justify-start ">
              <h2 className="text-[#354158] text-[0.72656rem] font-[600]">
                MON - SAT
              </h2>
              <h2 className="text-[0.96875rem] font-[700] tracking-[-0.01213rem] leading-[170%] ">
                9am - 8pm
              </h2>
            </div>
          </div>
        </motion.div>
        <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .5 }}
      className="flex flex-col items-start justify-center">
          <div>
            <h1 className=" text-[#0A1834] text-[1.45313rem] font-semibold leading-[135%] tracking-[-0.03025rem]">
              Book an
            </h1>
            <h2 className="text-[#0A1834] text-[1.45313rem] font-semibold leading-[135%] tracking-[-0.03025rem]">
              Appointment
            </h2>
            
          </div>
          <div className="flex items-center justify-center gap-[15px] mt-[3rem]">
            <Image src="/boking.png" alt="timer" width={250} height={250} className="w-[29px] h-[29px]"/>
            <div className="flex flex-col items-start justify-start ">
              <h2 className="text-[#354158] text-[0.72656rem] font-[600]">
               Calender
              </h2>
              <h2 className="text-[0.96875rem] font-[700] tracking-[-0.01213rem] leading-[170%] ">
                14-12-2023
              </h2>
            </div>
          </div>
        </motion.div>
        <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .5 }}
      className="flex flex-col items-start justify-center">
          <h1 className=" text-[#0A1834] text-[1.45313rem] font-semibold leading-[135%] tracking-[-0.03025rem]">
            Emergency
          </h1>
          <h2 className="text-[#0A1834] text-[1.45313rem] font-semibold leading-[135%] tracking-[-0.03025rem]">
            Service
          </h2>

          <div className="flex items-center justify-center gap-[15px] mt-[3rem]">
            <Image src="/call.png" alt="timer" width={250} height={250} className="w-[33px] h-[33px]" />
            <div className="flex flex-col items-start justify-start ">
              <h2 className="text-[#354158] text-[0.72656rem] font-[600]">
                EMERGENCY LINE 24/7
              </h2>
              <h2 className="text-[0.96875rem] font-[700] tracking-[-0.01213rem] leading-[170%] ">
                1-234-567-891
              </h2>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Option;
