import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity';

type Props = {
    projects: Project[];
}

export default function Projects({ projects }: Props) {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
        
        <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-[#F58B54] text-xl md:text-2xl">
            Projects
        </h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F58B54]/80">
            {projects?.map((project, i) => (
                <div 
                    key={project._id} 
                    className="w-screen flex flex-shrink-0 flex-col snap-center space-y-5 items-center justify-center p-10 md:p-44 h-screen">
                    <motion.img 
                        initial={{
                            y: -100,
                            opacity: 0,
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        src={urlFor(project?.image).url()}
                        alt=""
                        className="h-28 md:h-72 xl:h-80 object-contain"
                    />

                    <div className="space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-lg md:text-2xl lg:text-4xl font-semibold text-center">
                            <span className="underline decoration-[#F58B54]/80">
                                Project {i + 1}:
                            </span>{" "}
                            {project?.title}
                        </h4>

                        <div className="flex items-center space-x-2 justify-center">
                            {project?.technologies.map((technology) => (
                                <img className="h-10 w-10 rounded-full object-cover" key={technology._id} src={urlFor(technology?.image).url()} alt=""  />
                            ))}
                        </div>

                        <p className="text-sm md:text-md lg:text-lg text-justify ">
                            {project?.summary}
                        </p>
                    
                    </div>
                </div>
            ))}
        </div>

        <div className="w-full absolute top-[20%] md:top-[30%] bg-[#F58B54]/40 left-0 h-[500px] -skew-y-12"/>
    </motion.div>
  )
}