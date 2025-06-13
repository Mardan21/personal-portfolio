import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experiences: Experience[];
};

export default function WorkExperience({ experiences }: Props) {
  const sortedExperiences = experiences.sort(
    (a, b) =>
      new Date(b.dateStarted).getTime() - new Date(a.dateStarted).getTime()
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const [openExperiences, setOpenExperiences] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleExperience = (experienceId: string) => {
    setOpenExperiences((prev) => ({
      ...prev,
      [experienceId]: !prev[experienceId],
    }));
  };

  return (
    <div className="kunaiCursor flex relative flex-col text-left max-w-6xl px-10 py-24 mx-auto sm:h-full ">
      <motion.h3
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="narutoTextName uppercase tracking-[5px] md:tracking-[20px] text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-16 text-center"
      >
        Experience
      </motion.h3>

      <div className="space-y-12 md:space-y-16">
        {sortedExperiences?.map((experience, index) => {
          const isOpen = openExperiences[experience._id];

          return (
            <motion.div
              key={experience._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Main Experience Container */}
              <div className="rounded-3xl border border-black/20 hover:border-[#e31e24] transition-all duration-500 bg-gradient-to-br from-[#ff4500]/10 to-[#00bfff]/10 hover:from-[#ff4500]/20 hover:to-[#00bfff]/20 overflow-hidden">
                {/* Header - Always Visible */}
                <div
                  className="p-6 md:p-8 cursor-pointer"
                  onClick={() => toggleExperience(experience._id)}
                >
                  {/* Mobile Layout */}
                  <div className="block md:hidden">
                    {/* Top Row: Title & Company (left) + Logo (right) */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1 min-w-0">
                        <h4 className="ninjaText text-[#fff]/80 text-md md:text-xl font-semibold tracking-[1px] mb-1">
                          {experience.jobTitle}
                        </h4>
                        <h5 className="narutoText2 text-[#000] text-md font-bold">
                          {experience.company}
                        </h5>
                      </div>

                      <div className="flex-shrink-0">
                        <img
                          src={urlFor(experience?.companyImage).url()}
                          alt={`${experience.company} logo`}
                          className="w-16 h-16 rounded-2xl object-cover border border-black/10"
                        />
                      </div>
                    </div>

                    {/* Bottom Row: Date Range + Chevron */}
                    <div className="flex items-center justify-between">
                      <p className="ninjaText text-[#fff]/80 text-sm font-medium uppercase tracking-[2px]">
                        {formatDate(experience.dateStarted)} —{" "}
                        {experience.isCurrentlyWorkingHere
                          ? "Present"
                          : formatDate(experience.dateEnded)}
                      </p>

                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDownIcon className="w-5 h-5 text-[#fff]/80 hover:text-[#ff4500] transition-colors duration-200" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Desktop Layout - Keep Original */}
                  <div className="hidden md:flex md:items-start gap-6 md:gap-8">
                    {/* Left: Company Logo */}
                    <div className="flex-shrink-0">
                      <img
                        src={urlFor(experience?.companyImage).url()}
                        alt={`${experience.company} logo`}
                        className="w-16 h-16 md:w-20 md:h-20 rounded-3xl object-cover border border-black/10"
                      />
                    </div>

                    {/* Right: Header Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div className="flex-1">
                          <h4 className="ninjaText text-[#fff]/80 text-xl md:text-2xl font-semibold tracking-[1px] mb-1">
                            {experience.jobTitle}
                          </h4>
                          <h5 className="narutoText2 text-[#000] text-lg md:text-xl font-bold">
                            {experience.company}
                          </h5>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="ninjaText text-[#fff]/90 text-sm md:text-lg font-medium uppercase tracking-[2px]">
                              {formatDate(experience.dateStarted)} —{" "}
                              {experience.isCurrentlyWorkingHere
                                ? "Present"
                                : formatDate(experience.dateEnded)}
                            </p>
                          </div>

                          {/* Chevron Arrow */}
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0"
                          >
                            <ChevronDownIcon className="w-6 h-6 text-[#fff]/80 hover:text-[#ff4500] transition-colors duration-200" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
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
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                        <div className="ml-0 md:ml-24">
                          {" "}
                          {/* No left margin on mobile, align with desktop content */}
                          {/* Description Points */}
                          <motion.ul
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="space-y-3 mb-6"
                          >
                            {experience.points.map((point, i) => (
                              <motion.li
                                key={i}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1 + i * 0.05 }}
                                className="flex items-start gap-3"
                              >
                                <div className="w-2 h-2 bg-[#fff] rounded-full mt-2 flex-shrink-0"></div>
                                <p className="ninjaText text-[#fff]/80 text-sm md:text-base leading-relaxed tracking-[0.5px]">
                                  {point}
                                </p>
                              </motion.li>
                            ))}
                          </motion.ul>
                          {/* Technologies */}
                          {experience.technologies &&
                            experience.technologies.length > 0 && (
                              <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-wrap gap-2"
                              >
                                {experience.technologies.map((tech, i) => (
                                  <motion.span
                                    key={i}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.2 + i * 0.05 }}
                                    className="px-3 py-1 bg-[#fa5000]/20 text-[#fff]/80 text-xs font-medium rounded-full border border-[#e31e24] hover:bg-[#fa5000]/50 transition-colors duration-200"
                                  >
                                    {tech.title}
                                  </motion.span>
                                ))}
                              </motion.div>
                            )}
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
    </div>
  );
}
