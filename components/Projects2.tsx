import { useState } from 'react'

import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity';

type Props = {
    projects: Project[];
}

export default function Projects2({ projects }: Props) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="kunaiCursor h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center">
        
        <div className="flex flex-col items-center absolute top-20 md:top-24 uppercase">
            <h3 className="narutoTextName tracking-[20px] text-xl md:text-5xl">
                Projects
            </h3>
            <p className="ninjaText pt-4 text-lg tracking-[3px]">
                &lt; Click on a featured project for details ! &gt;
            </p>
        </div>

        <div className="flex flex-row space-x-10 w-[80%] z-10">
            {projects?.map((project, i) => (
                <div 
                    key={project._id} 
                    style={{ minWidth: '200px', minHeight: '200px' }}
                    className="rasenganCursor flex flex-col items-center border border-black hover:border-white p-4 overflow-hidden rounded-3xl bg-[#00bfff]/60"
                    onClick={() => handleProjectClick(project)}
                >
                    {/* Card Top */}
                    <div className="w-[100%] h-[100%] pb-4">
                        {/* Project Image */}
                        <img 
                            src={urlFor(project?.image).url()}
                            alt=""
                            className="border border-black aspect-video w-full h-[100%] rounded-2xl object-cover"
                        />
                    </div>

                    {/* Card Bottom */}
                    <div className="flex justify-space-between p-2 h-[25%]">
                        {/* Project Name */}
                        <h4 className="narutoText2 text-[#FF4500] text-lg md:text-xl font-semibold">
                            {project?.title}
                        </h4>
                    </div>
                </div>
            ))}

            {/* Project Modal */}
            {selectedProject && (
                <div className="modalContainer flex justify-center items-center bg-[#151515] bg-opacity-70">
                    <div className="lg:w-[800px] lg:h-[500px] rounded-xl border border-black bg-gradient-to-br from-[#a40] to-[#00bfff] p-8 flex">
                        {/* Left Section */}
                        <div className="flex flex-col w-[55%] justify-start">
                            <img
                                src={urlFor(selectedProject.image).url()}
                                alt=""
                                className="w-full h-auto object-cover rounded-xl border border-black"
                            />

                            {/* Bottom of Left Section */}
                            <div className="flex flex-col h-full mt-8 ml-2">

                                <h4 className="narutoText2 text-[#FF4500] tracking-[2px] mb-auto text-4xl">
                                    {selectedProject.title}
                                </h4>

                                <div className="flex flex-col">
                                    <p className="ninjaText text-xl text-[#000] uppercase justify-end mb-2">Link To Demo:</p>
                                    <p className="ninjaText text-md tracking-[1px] text-[#fff]">{selectedProject.linkToBuild}</p>
                                </div>

                            </div>
                            
                        </div>

                        {/* Right Section */}
                        <div className=" w-[45%] flex flex-col flex-grow pl-8">
                            <div className="text-5xl text-right">
                                <button className="narutoText2 text-[#FF4500] hover:narutoText hover:text-[#0c2fdf] rasenganCursor pb-4" onClick={closeModal}>
                                    X
                                </button>
                            </div>
                            <p className="ninjaText text-black text-sm tracking-[2px]">
                                {selectedProject.summary}
                            </p>
                        </div>
                    </div>
                </div>
            )}

        </div>
        <div className="w-full absolute top-[20%] md:top-[30%] bg-[#FF4500]/70 left-0 h-[400px] -skew-y-6"/>
    </div>
  )
}