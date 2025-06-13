import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Link from "next/link";
import {
  ArrowTopRightOnSquareIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  const [openProjects, setOpenProjects] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleProject = (projectId: string) => {
    setOpenProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  return (
    <div className="kunaiCursor flex relative flex-col text-left max-w-7xl px-6 md:px-10 py-24 mx-auto sm:h-full">
      <motion.h3
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="narutoTextName uppercase tracking-[5px] md:tracking-[20px] text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-16 text-center"
      >
        Projects
      </motion.h3>

      {/* Responsive Grid: 2 columns on mobile, 3 on medium+ screens */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {projects?.map((project, index) => {
          const isOpen = openProjects[project._id] || false;

          return (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Compact Project Card */}
              <div className="bg-gradient-to-b from-[#fa5000]/30 to-[#000]/30 hover:from-[#fa5000]/60 hover:to-[#e31e24]/60 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 p-4">
                {/* Nested Image Container */}
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={urlFor(project.image).url()}
                    alt={project.title}
                    className="w-[100%] h-[80px] sm:h-24 md:h-32 lg:h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlay with quick action */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                      href={project.linkToBuild}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 bg-[#e31e24] hover:bg-[#fa5000] text-white rounded-lg transition-colors duration-200 font-medium text-sm"
                    >
                      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                      View
                    </Link>
                  </div>
                </div>

                {/* Compact Content */}
                <div>
                  {/* Project Title & Category */}
                  <div className="mb-3">
                    <h4 className="text-[#e31e24] text-lg font-bold mb-1  tracking-[0.5px] narutoText2 ">
                      {project.title}
                    </h4>
                    {/* <p className="text-[#e31e24] text-xs font-medium uppercase tracking-[1px] ninjaText">
                      Featured Project
                    </p> */}
                  </div>

                  {/* Brief Description */}
                  <p className="hidden ninjaText text-white/80 text-xs leading-relaxed ml-mb-4 line-clamp-2">
                    {project.summary.length > 80
                      ? `${project.summary.substring(0, 80)}...`
                      : project.summary}
                  </p>

                  {/* Tech Stack (limited) */}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="hidden flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-[#fa5000]/20 text-[#fff]/80 text-xs font-medium rounded-full border border-[#e31e24] hover:bg-[#fa5000]/50 text-xs rounded-md border border-slate-600/30"
                        >
                          {tech.title}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-[#fa5000]/20 text-[#fff]/80 text-xs font-medium rounded-full border border-[#e31e24] hover:bg-[#fa5000]/50 text-xs rounded-md border border-slate-600/30 text-xs rounded-md">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Action Row */}
                  <div className="flex items-center justify-between">
                    <Link
                      href={project.linkToBuild}
                      target="_blank"
                      className="flex items-center gap-1 text-[#e31e24] hover:text-[#fa5000] text-sm font-medium transition-colors duration-200"
                    >
                      View
                      <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                    </Link>

                    <button
                      onClick={() => toggleProject(project._id)}
                      className="flex items-center gap-1 text-slate-400 hover:text-orange-400 text-sm transition-colors duration-200"
                    >
                      Details
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDownIcon className="w-3 h-3" />
                      </motion.div>
                    </button>
                  </div>
                </div>

                {/* Expandable Details */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 border-t border-slate-600/30">
                        <div className="pt-4 space-y-4">
                          {/* Full Description */}
                          <div>
                            <h6 className="text-[#e31e24] text-xs font-semibold mb-2 uppercase tracking-[1px] ninjaText">
                              About This Project
                            </h6>
                            <p className="ninjaText text-white/80 text-xs leading-relaxed">
                              {project.summary}
                            </p>
                          </div>

                          {/* All Technologies */}
                          {project.technologies &&
                            project.technologies.length > 3 && (
                              <div>
                                <h6 className="text-[#e31e24] text-xs font-semibold mb-2 uppercase tracking-[1px] ninjaText">
                                  Technologies Used
                                </h6>
                                <div className="flex flex-wrap gap-1">
                                  {project.technologies.map((tech, i) => (
                                    <span
                                      key={i}
                                      className="px-2 py-1 bg-[#fa5000]/20 text-[#fff]/80  text-xs rounded-md border border-slate-600/30 hover:bg-[#e31e24]/20 hover:border-[#e31e24]/40 transition-colors duration-200"
                                    >
                                      {tech.title}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                          {/* Additional Action Button */}
                          <div className="pt-2">
                            <Link
                              href={project.linkToBuild}
                              target="_blank"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-[#e31e24]/20 text-[#e31e24] hover:bg-[#e31e24] hover:text-white border border-[#e31e24]/30 hover:border-[#e31e24] rounded-lg transition-all duration-200 font-medium text-sm"
                            >
                              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                              Open Project
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Background Decorative Element */}
      <div className="w-full absolute top-[20%] bg-[#E31E24]/5 left-0 h-[400px] -skew-y-6 -z-10" />
    </div>
  );
}
