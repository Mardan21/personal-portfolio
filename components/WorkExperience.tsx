import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '../typings';

type Props = {
  experiences: Experience[];
}

export default function WorkExperience({ experiences }: Props) {
  const sortedExperiences = experiences.sort((a, b) => new Date(b.dateStarted).getTime() - new Date(a.dateStarted).getTime())

  return (
    <div className="kunaiCursor h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
        <h3 className="narutoTextName absolute top-24 uppercase tracking-[20px] text-xl md:text-2xl lg:text-5xl">
            Experience
        </h3>

        <div className="kunaiCursor w-screen md:w-full text-left flex space-x-5 overflow-x-scroll p-10 md:pb-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FF4500]">
          {sortedExperiences?.map((experience) => (
            <ExperienceCard key={experience.dateStarted} experience={experience}/>
          ))}
        </div>
    </div>
  )
};