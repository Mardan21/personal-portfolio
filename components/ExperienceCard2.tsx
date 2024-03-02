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

  const endDate = endMonth + " " + endYear.toString()

  return (
    <div style={{ minWidth: '300px', minHeight: '200px' }} className="kunaiCursor flex w-full rounded-3xl bg-gradient-to-tr from-[#F58B54]/90 to-[#211717] p-4">
        {/* Left Section */}
        <div className="kunaiCursor w-[70%] flex flex-col">
            {/* Top Section */}
            <div className="flex flex-col h-full">
                {/* Job Title */}
                <h4 className="ninjaText text-md md:text-lg font-light text-[#DFDDC7] mt-0 mb-auto">
                    {experience?.jobTitle}
                </h4>
                {/* Company and Dates */}
                <div className="flex flex-col">
                    <p className="font-semibold text-md md:text-lg mt-2 text-[#211717]">
                        {experience?.company}
                    </p>
                    <p className="uppercase mt-1 text-sm md:text-lg text-[#211717]">
                        {startMonth} {startYear} - {experience.isCurrentlyWorkingHere ? "Present" : endDate}
                    </p>
                </div>
            </div>
        </div>
        {/* Right Section */}
        <div className="w-[30%] flex justify-end items-center">
            {/* Image */}
            <img 
                className="visible w-28 h-28 rounded-3xl xl:w-[100px] xl:h-[100px] mb-2 object-cover object-center"
                src={urlFor(experience?.companyImage).url()}
                alt=""
            />
        </div>
    </div>
  )        
            {/* <div className="relative flex justify-between w-full"> */}
                {/* Text Content */}
                {/* <div className="flex flex-col w-full">
                    {/* Job Title */}
                    {/* <h4 className="ninjaText text-lg md:text-xl font-light text-[#DFDDC7]">
                        {experience?.jobTitle}
                    </h4>  */}
                    {/* Company and Dates */}
                    {/* <div className="flex justify-between items-end mt-auto">
                      <div className="flex flex-col">
                        <p className="font-semibold text-md md:text-xl mt-2 text-[#211717]">
                            {experience?.company}
                        </p>
                        <p className="uppercase mt-1 text-sm md:text-lg text-[#211717]">
                            {startMonth}{" "}{startYear} - {experience.isCurrentlyWorkingHere ? "Present" : endDate}
                        </p>
                      </div>
                      <img 
                        className="visible w-28 h-28 rounded-3xl xl:w-[100px] xl:h-[100px] mb-2 object-cover object-center"
                        src={urlFor(experience?.companyImage).url()}
                        alt=""
                      />
                    </div>
                </div> */}
                {/* Image */}
                {/* <img 
                    className="visible w-28 h-28 rounded-3xl xl:w-[100px] xl:h-[100px] mb-2 object-cover object-center"
                    src={urlFor(experience?.companyImage).url()}
                    alt=""
                /> */}
            {/* </div> */}
        {/* </div> */}

        {/* OpenedExperienceCard */}

        {/* <ul className="list-disc px:0 md:px-10 text-[#DFDDC7] ninjaText space-y-2 pr-5 pl-5  ml-0 text-sm md:text-lg overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F58B54]/80">
            {experience.points.map((point, i) => (
                <li key={i}>{point}</li>
            ))}
        </ul> */}

  
}