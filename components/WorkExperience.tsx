import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '../typings';

type Props = {
  experiences: Experience[];
}

export default function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-[#F58B54] text-xl md:text-2xl">
            Experience
        </h3>

        <div className="w-screen h-3/4 md:2/3 md:w-full text-left flex space-x-5 overflow-x-scroll p-10 md:pb-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F58B54]/80">
          {experiences?.map((experience) => (
            <ExperienceCard key={experience._id} experience={experience}/>
          ))}
        </div>
    </motion.div>
  )
};