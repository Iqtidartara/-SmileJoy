import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

const Faq = () => {
  return (
    <section className='w-full'>
<main className='mx-auto max-w-[90rem] md:px-32 px-4 md:py-[8.66rem] py-[3rem] flex flex-col md:flex-row items-start justify-start md:gap-0 gap-16'>
 
    <div className='md:w-1/2 w-full '>
        <h1 className='textcolor font-[700] md:text-[3rem] text-[2rem] tracking-[0.06rem] md:leading-[125%] leading-normal md:text-start text-center'>Everything you <br/> need to know</h1>
    </div>
    <div className='md:w-1/2 w-full px-4'>
    <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className='text-[.0.75rem] font-[600] text-start'>How can I schedule an appointment with my doctor?</AccordionTrigger>
    <AccordionContent className=' font-[300]'>
    You can schedule an appointment with your doctor by calling the clinic directly or using the online appointment booking system available on our website. Additionally, you may inquire about appointment availability through our reception desk during regular office hours.
    </AccordionContent>
  </AccordionItem>
</Accordion>


<Accordion type="single" collapsible>
  <AccordionItem value="item-1" className='md:mt-[2rem] mt-0'>
    <AccordionTrigger className='text-[.0.75rem] font-[600] text-start'>Can I reschedule or cancel my appointment?</AccordionTrigger>
    <AccordionContent className=' font-[300]'>
    To reschedule or cancel your appointment, please contact the relevant service provider or organization as soon as possible. Be sure to check their cancellation policy and provide ample notice to avoid any potential fees or inconveniences.
    </AccordionContent>
  </AccordionItem>
</Accordion>

<Accordion type="single" collapsible>
  <AccordionItem value="item-1" className='md:mt-[2rem] mt-0'>
    <AccordionTrigger className='text-[.0.75rem] font-[600] text-start'>Is it possible to schedule virtual or telemedicine appointments?</AccordionTrigger>
    <AccordionContent className=' font-[300]'>
Yes, many healthcare providers offer virtual or telemedicine appointments. You can schedule these appointments by contacting your healthcare provider&apos;s office and discussing the option of a remote consultation. Ensure you have the necessary technology and instructions for the virtual visit.
    </AccordionContent>
  </AccordionItem>
</Accordion>

<Accordion type="single" collapsible >
  <AccordionItem value="item-1" className='md:mt-[2rem] mt-0' >
    <AccordionTrigger className='text-[.0.75rem] font-[600] text-start'>How can I contact the clinic for further assistance or questions about my appointment?</AccordionTrigger>
    <AccordionContent className=' font-[300]'>
    To seek further assistance or inquire about your appointment, contact the clinic directly by calling their main phone number. You can find this information on their website or any appointment-related documentation. Alternatively, check for email contacts or patient portals if provided.
    </AccordionContent>
  </AccordionItem>
</Accordion>
    </div>
</main>
    </section>
  )
}

export default Faq;