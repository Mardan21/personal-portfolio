// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Project } from "../typings";
// import { urlFor } from "../sanity";
// import Link from "next/link";
// import {
//   ArrowTopRightOnSquareIcon,
//   CodeBracketIcon,
//   ChevronDownIcon,
// } from "@heroicons/react/24/outline";

// type Props = {
//   projects: Project[];
// };

// export default function Projects({ projects }: Props) {
//   const [openProjects, setOpenProjects] = useState<{ [key: string]: boolean }>(
//     {}
//   );

//   const toggleProject = (projectId: string) => {
//     setOpenProjects((prev) => ({
//       ...prev,
//       [projectId]: !prev[projectId],
//     }));
//   };

//   // Card backgrounds using your color scheme
//   const cardBackgrounds = [
//     "bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-600/30",
//     "bg-gradient-to-br from-slate-700/60 to-slate-900/80 border-slate-500/30",
//     "bg-gradient-to-br from-gray-800/60 to-slate-900/80 border-gray-600/30",
//     "bg-gradient-to-br from-zinc-800/60 to-slate-900/80 border-zinc-600/30",
//   ];

//   return (
//     <div className="kunaiCursor min-h-screen flex relative flex-col text-left max-w-7xl px-6 md:px-10 py-24 mx-auto">
//       <motion.h3
//         initial={{ opacity: 0, y: -50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="narutoTextName uppercase tracking-[5px] md:tracking-[20px] text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-16 text-center"
//       >
//         Projects
//       </motion.h3>

//       {/* Desktop: 2-column grid, Mobile: Single column */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
//         {projects?.map((project, index) => {
//           const isOpen = openProjects[project._id] || false;
//           const cardBg = cardBackgrounds[index % cardBackgrounds.length];

//           return (
//             <motion.div
//               key={project._id}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="group h-fit" // h-fit prevents stretching in grid
//             >
//               {/* Project Card */}
//               <div
//                 className={`rounded-2xl border backdrop-blur-sm hover:backdrop-blur-md transition-all duration-500 ${cardBg} overflow-hidden hover:border-orange-500/40`}
//               >
//                 {/* Mobile Layout */}
//                 <div className="lg:hidden">
//                   {/* Mobile Image - Smaller, optimized */}
//                   <div className="relative overflow-hidden border-b border-slate-600/30">
//                     <img
//                       src={urlFor(project.image).url()}
//                       alt={project.title}
//                       className="w-full h-40 object-cover"
//                     />
//                     {/* Mobile Quick Actions Overlay */}
//                     <div className="absolute top-3 right-3 flex gap-2">
//                       <Link
//                         href={project.linkToBuild}
//                         target="_blank"
//                         className="p-2 bg-[#FA5000]/90 hover:bg-[#E31E24] text-white rounded-full transition-colors duration-200 backdrop-blur-sm"
//                       >
//                         <ArrowTopRightOnSquareIcon className="w-4 h-4" />
//                       </Link>
//                       {/* {project.linkToGithub && (
//                         <Link
//                           href={project.linkToGithub}
//                           target="_blank"
//                           className="p-2 bg-slate-700/90 hover:bg-slate-600 text-white rounded-full transition-colors duration-200 backdrop-blur-sm"
//                         >
//                           <CodeBracketIcon className="w-4 h-4" />
//                         </Link>
//                       )} */}
//                     </div>
//                   </div>

//                   {/* Mobile Content */}
//                   <div className="p-4">
//                     <div className="flex items-start justify-between mb-3">
//                       <div className="flex-1">
//                         <p className="text-[#FA5000] text-xs font-medium uppercase tracking-[1px] mb-1 font-['JetBrains_Mono']">
//                           Featured Project
//                         </p>
//                         <h4 className="text-[#E31E24] text-lg font-bold mb-2 tracking-[0.5px] font-['Orbitron'] uppercase leading-tight">
//                           {project.title}
//                         </h4>
//                         <p className="text-slate-300 text-sm leading-relaxed font-['Inter'] line-clamp-2">
//                           {project.summary.substring(0, 100)}...
//                         </p>
//                       </div>

//                       <button
//                         onClick={() => toggleProject(project._id)}
//                         className="ml-2 p-1 text-slate-400 hover:text-orange-400 transition-colors duration-200 flex-shrink-0"
//                       >
//                         <motion.div
//                           animate={{ rotate: isOpen ? 180 : 0 }}
//                           transition={{ duration: 0.3 }}
//                         >
//                           <ChevronDownIcon className="w-4 h-4" />
//                         </motion.div>
//                       </button>
//                     </div>

//                     {/* Mobile Tech Tags */}
//                     {project.technologies &&
//                       project.technologies.length > 0 && (
//                         <div className="flex flex-wrap gap-1 mb-3">
//                           {project.technologies.slice(0, 3).map((tech, i) => (
//                             <span
//                               key={i}
//                               className="px-2 py-1 bg-slate-700/40 text-slate-200 text-xs font-medium rounded-full border border-slate-500/40 font-['JetBrains_Mono']"
//                             >
//                               {tech.title}
//                             </span>
//                           ))}
//                           {project.technologies.length > 3 && (
//                             <span className="px-2 py-1 bg-slate-600/20 text-slate-400 text-xs font-medium rounded-full border border-slate-600/30">
//                               +{project.technologies.length - 3}
//                             </span>
//                           )}
//                         </div>
//                       )}

//                     {/* Mobile Action Buttons */}
//                     <div className="flex gap-2">
//                       <Link
//                         href={project.linkToBuild}
//                         target="_blank"
//                         className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-[#FA5000]/20 text-[#FA5000] hover:bg-[#FA5000] hover:text-white border border-[#FA5000]/30 hover:border-[#FA5000] rounded-lg transition-all duration-200 font-medium text-sm"
//                       >
//                         <ArrowTopRightOnSquareIcon className="w-4 h-4" />
//                         Demo
//                       </Link>

//                       <button
//                         onClick={() => toggleProject(project._id)}
//                         className="px-3 py-2 text-slate-400 hover:text-orange-400 text-sm font-medium transition-colors duration-200"
//                       >
//                         {isOpen ? "Less" : "More"}
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Desktop Layout */}
//                 <div className="hidden lg:block">
//                   {/* Desktop Image */}
//                   <div className="relative overflow-hidden border-b border-slate-600/30 group">
//                     <img
//                       src={urlFor(project.image).url()}
//                       alt={project.title}
//                       className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
//                     />
//                     {/* Desktop Overlay */}
//                     <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
//                       <Link
//                         href={project.linkToBuild}
//                         target="_blank"
//                         className="flex items-center border border-[#fa5000] gap-2 px-4 py-2 bg-[#e31e24] hover:bg-[#fa5000] text-white rounded-lg transition-colors duration-200 font-medium"
//                       >
//                         <ArrowTopRightOnSquareIcon className="w-4 h-4" />
//                         Link
//                       </Link>
//                       {/* {project.linkToGithub && (
//                         <Link
//                           href={project.linkToGithub}
//                           target="_blank"
//                           className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-200 font-medium"
//                         >
//                           <CodeBracketIcon className="w-4 h-4" />
//                           Code
//                         </Link>
//                       )} */}
//                     </div>
//                   </div>

//                   {/* Desktop Content */}
//                   <div className="p-6">
//                     <div className="flex items-start justify-between mb-4">
//                       <div className="flex-1">
//                         <p className="ninjaText text-[#e31e24] text-sm font-medium uppercase tracking-[2px] mb-2">
//                           Featured Project
//                         </p>
//                         <h4 className="text-slate-900 text-xl font-bold mb-3 tracking-[1px] narutoText2 uppercase">
//                           {project.title}
//                         </h4>
//                         {/* <p className="text-slate-300 text-sm leading-relaxed tracking-[0.3px] font-['Inter'] line-clamp-3">
//                           {project.summary.substring(0, 150)}...
//                         </p> */}
//                       </div>

//                       <button
//                         onClick={() => toggleProject(project._id)}
//                         className="ml-4 p-2 text-slate-400 hover:text-orange-400 rasenganCursor transition-colors duration-200"
//                       >
//                         <motion.div
//                           animate={{ rotate: isOpen ? 180 : 0 }}
//                           transition={{ duration: 0.3 }}
//                         >
//                           <ChevronDownIcon className="w-5 h-5" />
//                         </motion.div>
//                       </button>
//                     </div>

//                     {/* Desktop Tech Tags */}
//                     {project.technologies &&
//                       project.technologies.length > 0 && (
//                         <div className="flex flex-wrap gap-2 mb-4">
//                           {project.technologies.slice(0, 4).map((tech, i) => (
//                             <span
//                               key={i}
//                               className="px-3 py-1 bg-slate-700/40 text-slate-400 text-xs font-medium rounded-full border border-slate-500/40  hover:bg-orange-500/20 hover:text-orange-00 hover:border-orange-500/40 transition-colors duration-200"
//                             >
//                               {tech.title}
//                             </span>
//                           ))}
//                           {project.technologies.length > 4 && (
//                             <span className="px-3 py-1 bg-slate-600/20 text-slate-400 text-xs font-medium rounded-full border border-slate-600/30">
//                               +{project.technologies.length - 4}
//                             </span>
//                           )}
//                         </div>
//                       )}

//                     {/* Desktop Action Buttons */}
//                     <div className="flex items-center gap-3">
//                       <Link
//                         href={project.linkToBuild}
//                         target="_blank"
//                         className="rasenganCursor flex items-center gap-2 px-4 py-2 bg-[#e31e24]/20 text-[#e31e24] hover:bg-[#e31e24] hover:text-[#fa5000] border border-[#FA5000]/30 hover:border-[#FA5000] rounded-lg transition-all duration-200 font-medium text-sm"
//                       >
//                         <ArrowTopRightOnSquareIcon className="w-4 h-4" />
//                         Link
//                       </Link>

//                       {/* {project.linkToGithub && (
//                         <Link
//                           href={project.linkToGithub}
//                           target="_blank"
//                           className="flex items-center gap-2 px-4 py-2 bg-slate-700/20 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-600/30 hover:border-slate-600 rounded-lg transition-all duration-200 font-medium text-sm"
//                         >
//                           <CodeBracketIcon className="w-4 h-4" />
//                           View Code
//                         </Link>
//                       )} */}

//                       <button
//                         onClick={() => toggleProject(project._id)}
//                         className="px-4 py-2 text-slate-400 hover:text-orange-400 text-sm font-medium transition-colors duration-200 rasenganCursor"
//                       >
//                         {isOpen ? "Show Less" : "Read More"}
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Expandable Detailed Content (Both Mobile & Desktop) */}
//                 <AnimatePresence>
//                   {isOpen && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.4, ease: "easeInOut" }}
//                       className="overflow-hidden"
//                     >
//                       <div className="px-4 lg:px-6 pb-4 lg:pb-6 border-t border-slate-600/30">
//                         <div className="pt-4 lg:pt-6">
//                           {/* Full Description */}
//                           <div className="mb-4">
//                             <h6 className="text-[#e31e24] text-sm font-semibold mb-3 uppercase tracking-[2px] ninjaText">
//                               Project Details
//                             </h6>
//                             <p className="text-slate-200/90 text-sm leading-relaxed tracking-[0.3px] font-['Inter']">
//                               {project.summary}
//                             </p>
//                           </div>

//                           {/* All Technologies */}
//                           {project.technologies &&
//                             project.technologies.length >
//                               (typeof window !== "undefined" &&
//                               window.innerWidth < 1024
//                                 ? 3
//                                 : 4) && (
//                               <div>
//                                 <h6 className="text-[#E31E24] text-sm font-semibold mb-3 uppercase tracking-[2px] ninjaText">
//                                   All Technologies Used
//                                 </h6>
//                                 <div className="flex flex-wrap gap-2">
//                                   {project.technologies.map((tech, i) => (
//                                     <span
//                                       key={i}
//                                       className="px-3 py-1 bg-slate-700/20 text-slate-300 text-xs font-medium rounded-full border border-slate-600/30 hover:bg-red-500/20 hover:text-red-200 hover:border-red-500/40 transition-colors duration-200"
//                                     >
//                                       {tech.title}
//                                     </span>
//                                   ))}
//                                 </div>
//                               </div>
//                             )}
//                         </div>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>

//       {/* Background Decorative Element */}
//       <div className="w-full absolute top-[20%] bg-[#E31E24]/5 left-0 h-[400px] -skew-y-6 -z-10" />
//     </div>
//   );
// }

// --------------------------------------------------------

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
                    className="w-full sm:h-24 md:h-32 lg:h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlay with quick action */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                      href={project.linkToBuild}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 bg-[#e31e24] hover:bg-[#fa5000] text-white rounded-lg transition-colors duration-200 font-medium text-sm"
                    >
                      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                      View Project
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
                    <p className="text-[#e31e24] text-xs font-medium uppercase tracking-[1px] ninjaText">
                      Featured Project
                    </p>
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
                      View Project
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
