// import React from "react";
// import { motion } from "framer-motion";
// import { PageInfo } from "../typings";
// import { urlFor } from "../sanity";

// type Props = {
//   pageInfo: PageInfo;
// };

// export default function About({ pageInfo }: Props) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
//     >
//       <motion.h3
//         initial={{ opacity: 0, y: -50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="narutoTextName absolute top-24 tracking-[5px] md:tracking-[20px] text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-16 text-center"
//       >
//         About
//       </motion.h3>

//       <motion.img
//         initial={{
//           x: -200,
//           opacity: 0,
//         }}
//         transition={{
//           duration: 1.2,
//         }}
//         whileInView={{
//           opacity: 1,
//           x: 0,
//         }}
//         viewport={{ once: true }}
//         src={urlFor(pageInfo?.profilePic).url()}
//         className="-mb-20 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-3xl md:w-64 md:h-72 lg:w-[500px] lg:h-[500px] xl:w-[340px] xl:h-[380px]"
//       />
//       <div className="ninjaText space-y-5 md:space-y-10 px-0 md:px-10 tracking-[2px]">
//         <h4 className="text-2xl md:text-4xl text-white/80 font-semibold">
//           A{" "}
//           <span className="underline narutoText2 decoration-[#e31e24]/50">
//             bit
//           </span>{" "}
//           ABOUT ME
//         </h4>
//         <p className="text-sm md:text-m lg:text-lg text-white/80">
//           {pageInfo?.backgroundInformation}
//         </p>
//       </div>
//     </motion.div>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="kunaiCursor flex relative flex-col text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center min-h-screen py-20 "
    >
      <motion.h3
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="narutoTextName absolute top-24 tracking-[5px] md:tracking-[20px] text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-16 text-center"
      >
        About
      </motion.h3>

      {/* Mobile Layout */}
      <div className="flex flex-col items-center space-y-8 md:hidden mt-20">
        <motion.img
          initial={{
            scale: 0.8,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          src={urlFor(pageInfo?.profilePic).url()}
          className="w-60 h-48 rounded-3xl object-cover border-4 border-[#ff4500]/30 shadow-lg shadow-[#ff4500]/20"
        />

        <div className="ninjaText space-y-6 px-4 max-w-lg">
          <h4 className="text-xl font-semibold text-white/90 leading-relaxed">
            A{" "}
            <span className="underline narutoText2 decoration-[#e31e24]/50 text-[#ff4500]">
              bit
            </span>{" "}
            ABOUT ME
          </h4>
          <p className="text-base leading-relaxed text-white/80 tracking-[0.5px]">
            {pageInfo?.backgroundInformation}
          </p>
        </div>
      </div>

      {/* Desktop Layout - Keep Original */}
      <div className="hidden md:flex md:flex-row md:items-center md:justify-evenly md:w-full">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          src={urlFor(pageInfo?.profilePic).url()}
          className="flex-shrink-0 rounded-3xl w-64 h-72 lg:w-[300px] lg:h-[350px] xl:w-[380px] xl:h-[420px] object-cover"
        />

        <div className="ninjaText space-y-5 md:space-y-10 px-0 md:px-10 tracking-[2px]">
          <h4 className="text-2xl md:text-4xl text-white/80 font-semibold">
            A{" "}
            <span className="underline narutoText2 decoration-[#e31e24]/50 text-[#ff4500]">
              bit
            </span>{" "}
            ABOUT ME
          </h4>
          <p className="text-sm md:text-m lg:text-lg text-white/80">
            {pageInfo?.backgroundInformation}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
