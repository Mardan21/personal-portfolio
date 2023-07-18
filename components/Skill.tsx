import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity';
import { Skill } from '../typings';

type Props = {
    skill: Skill;
    directionLeft?: boolean;
}

export default function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
        <motion.img
            initial={{
                x: directionLeft ? -40 : 40,
                opacity: 0
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={urlFor(skill?.image).url()}
            className="rounded-full border-2 border-[#A34A28] object-cover w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"

        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
                <p className="text-xl md:text-2xl xl:text-3xl font-bold text-[#F58B54] opacity-100">{skill.progress}%</p>
            </div>
        </div>
        
    </div>
  )
}