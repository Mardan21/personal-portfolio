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
    <div className="kunaiCursor h-screen relative flex overflow-hidden flex-col text-left max-w-full justify-center items-center">
        <h3 className="narutoTextName absolute top-24 uppercase tracking-[5px] md:tracking-[20px] text-4xl md:text-4xl lg:text-5xl">
                Projects
        </h3>

        <p className="ninjaText text-xs md:text-lg lg:text-lg tracking-[2px] z-10 pt-8 mt-8 mb-2">
                &lt; Click on a project for details ! &gt;
        </p>

        <div className="items-center justify-center lg:space-x-10 lg:space-y-0 grid grid-cols-2 gap-4 p-6 lg:flex lg:flex-row lg:w-[90%] xl:w-[70%] z-10">
            {projects?.map((project, i) => (
                <div 
                    key={project._id} 
                    // style={{ minWidth: '200px', minHeight: '200px' }}
                    className="rasenganCursor flex flex-col items-center border border-black hover:border-white p-0 sm:p-4 overflow-hidden rounded-3xl bg-[#00bfff]/60  sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px]"
                    onClick={() => handleProjectClick(project)}
                >
                    {/* Card Top */}
                    <div className="w-[100%] h-[80%] pb-4">
                        {/* Project Image */}
                        <img 
                            src={urlFor(project?.image).url()}
                            alt=""
                            className="border border-black aspect-video w-full h-[100%] rounded-t-2xl rounded-b-none sm:rounded-2xl object-cover"
                        />
                    </div>

                    {/* Card Bottom */}
                    <div className="flex items-center text-center p-2 h-[20%]">
                        {/* Project Name */}
                        <h4 className="narutoText2 text-[#FF4500] text-sm sm:text-lg md:text-lg lg:text-xl font-semibold">
                            {project?.title}
                        </h4>
                    </div>
                </div>
            ))}

            {/* Project Modal */}
            {selectedProject && (
                <div className="modalContainer flex justify-center items-center bg-[#151515] bg-opacity-70">
                    {/* Tablets and Larger Screens */}
                    <div className="hidden md:flex w-[90%] h-[40%] md:h-[45%] lg:w-[800px] lg:h-[500px] rounded-xl border border-black bg-gradient-to-br from-[#a40] to-[#00bfff] p-4 md:p-8 ">
                        {/* Left Section */}
                        <div className="flex flex-col w-[40%] md:w-[50%] justify-start">
                            <img
                                src={urlFor(selectedProject.image).url()}
                                alt=""
                                className="hidden md:block w-full h-auto object-cover rounded-xl border border-black"
                            />

                            {/* Bottom of Left Section */}
                            <div className="flex flex-col h-full mt-4 lg:mt-8 md:ml-2">

                                <h4 className="narutoText2 text-[#FF4500] tracking-[2px] mb-auto text-lg md:text-2xl lg:text-4xl">
                                    {selectedProject.title}
                                </h4>

                                <div className="flex flex-col">
                                    <p className="ninjaText text-sm lg:text-xl text-[#000] uppercase justify-end mb-2">Link To Demo:</p>
                                    <p className="ninjaText text-sm lg:text-md tracking-[1px] text-[#fff]">{selectedProject.linkToBuild}</p>
                                </div>

                            </div>
                            
                        </div>

                        {/* Right Section */}
                        <div className="w-[60%] md:w-[45%] flex flex-col flex-grow pl-8">
                            <div className="text-2xl md:text-5xl text-right">
                                <button className="narutoText2 text-[#FF4500] hover:narutoText hover:text-[#0c2fdf] rasenganCursor pb-2 lg:pb-4" onClick={closeModal}>
                                    X
                                </button>
                            </div>
                            <p className="ninjaText text-black text-xs lg:text-sm lg:tracking-[2px]">
                                {selectedProject.summary}
                            </p>
                        </div>
                    </div>


                    {/* Mobile Screens */}
                    <div className="flex md:hidden w-[80%] h-[40%] rounded-xl border border-black bg-gradient-to-br from-[#a40] to-[#00bfff] p-4">
                        {/* Left Section */}
                        <div className="flex flex-col w-full justify-between">
                            {/* <img
                                src={urlFor(selectedProject.image).url()}
                                alt=""
                                className="hidden md:block w-full h-auto object-cover rounded-xl border border-black"
                            /> */}

                            {/* Top Section */}
                            <div>
                                <div className="flex flex-row justify-between text-xl sm:text-2xl">
                                    <h4 className="narutoText2 text-[#FF4500] tracking-[1px] sm:tracking-[2px]">
                                        {selectedProject.title}
                                    </h4>
                                    <button className="narutoText2 text-[#FF4500] hover:narutoText hover:text-[#0c2fdf] rasenganCursor" onClick={closeModal}>
                                        X
                                    </button>
                                </div>
                                <div className="mt-2 sm:mt-4">
                                    <p className="ninjaText text-black text-xs sm:text-sm sm:tracking-[2px]">
                                        {selectedProject.summary}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col pt-2 sm:pt-4">
                                <p className="ninjaText text-xs sm:text-sm text-[#fff] uppercase">
                                    Demo Link:
                                </p>
                                <p className="ninjaText text-xs sm:text-sm sm:tracking-[1px] text-[#000]">
                                    {selectedProject.linkToBuild}
                                </p>
                            </div>
                            

                            
                        </div>
                    </div>
                </div>
            )}

        </div>
        <div className="w-full absolute top-[20%] md:top-[30%] bg-[#FF4500]/70 left-0 h-[400px] -skew-y-6"/>
    </div>
  )
}