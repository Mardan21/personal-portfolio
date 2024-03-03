import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    experience: Experience;
}

export default function ExperienceCard({ experience }: Props) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const numStartMonth = new Date(experience.dateStarted).getMonth()
  const numEndMonth = new Date(experience.dateEnded).getMonth()
  const startMonth = months[numStartMonth]
  const endMonth = months[numEndMonth]

  const startYear = new Date(experience.dateStarted).getFullYear()
  const endYear = new Date(experience.dateEnded).getFullYear()

  const endDate = `${endMonth} \u00A0 ${endYear.toString()}`

  return (
    <div className="flex flex-col border border-black hover:border-white drop-shadow-2xl rounded-3xl items-center space-y-0 flex-shrink-0 h-[80%] w-[80%] sm: md:h-[500px] md:w-[70%] lg:h-[400px] lg:w-[400px] xl:h-[400px] xl:w-[400px] snap-center bg-[#ff4500]/50 p-5 md:p10 hover:opacity-100 opacity-40 transition-opacity duration-500 overflow-hidden ">
        <div className="flex justify-between w-full px-0 mb-4 md::px-10">
            {/* Left Section */}
            <div className="w-full md:w-[70%] lg:w-[60%] flex flex-col">
                {/* Top Section */}
                <div className="flex flex-col h-full">
                    {/* Job Title */}
                    <h4 className="narutoText2  text-[#0c2fdf] tracking-[2px] text-md md:text-lg font-light mt-0 mb-auto">
                        {experience?.jobTitle}
                    </h4>
                    
                    {/* Company and Dates */}
                    <div className="flex flex-col">
                        <p className="ninjaText font-bold text-md pb-2 md:text-lg">
                            {experience?.company}
                        </p>
                        <p className="uppercase font-semibold text-sm md:text-md narutoText text-white">
                            {startMonth} &nbsp; {startYear} &nbsp; - &nbsp; {experience.isCurrentlyWorkingHere ? "Present" : endDate}
                        </p>
                    </div>

                </div>
            </div>
            {/* Right Section */}
            <div className="hidden md:flex w-[30%] text-right justify-end items-end">
                {/* Image */}
                <img 
                    className="md:w-28 md:h-28 rounded-3xl xl:w-[100px] xl:h-[100px] mb-2 object-cover object-center"
                    src={urlFor(experience?.companyImage).url()}
                    alt=""
                />
            </div>
            {/* <div className="md:flex md:justify-between items-center">    
                <div className="w-[60%]">
                    <h4 className="ninjaText text-lg md:text-2xl font-light mb-1 text-[#DFDDC7]">
                        {experience?.jobTitle}
                    </h4>
                    <p className="ninjaText font-bold text-md md:text-2xl mt-1 text-[#211717]">
                        {experience?.company}
                    </p>
                    <p className="uppercase py-2 md:py-5 text-sm md:text-lg text-[#211717]">
                        {startMonth}{" "}{startYear} - {experience.isCurrentlyWorkingHere ? "Present" : endDate}
                    </p>
                </div>
                <motion.img 
                    initial={{
                        opacity: 0,
                        y: -50,
                    }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    // className="visible xl:h-0 xl:w-0 h-0 w-0 md:h-28 md:w-28 rounded-full mb-0 object-cover object-center"
                    className="sm:visible md:visible lg:visible xl:visible w-28 h-28 md:w-0 rounded-full xl:w-[120px] xl:h-[120px] mb-2 object-cover object-center"
                    src={urlFor(experience?.companyImage).url()}
                    alt=""
                />
            </div> */}
            {/* <p className="uppercase py-2 md:py-5 text-sm md:text-lg text-[#211717]">
                {new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}
            </p> */}
        </div>

        <ul className="kunaiCursor list-disc ninjaText space-y-2 pr-4 pl-4 md:pr-10 md:pl-10 text-xs sm:text-sm md:text-sm lg:text-sm overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#0c2fdf]/80">
            {experience.points.map((point, i) => (
                <li key={i}>{point}</li>
            ))}
        </ul>

    </div>
  )
}