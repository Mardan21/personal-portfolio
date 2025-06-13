// import { SocialIcon } from 'react-social-icons'
// import { motion } from 'framer-motion'
// import Link from "next/link";
// import { Social } from '../typings';
// import { EnvelopeOpenIcon } from '@heroicons/react/24/solid'

// type Props = {
//     socials: Social[]
// }

// export default function Header({ socials }: Props) {

//     return (
//         <header className="kunaiCursor sticky top-0 flex justify-between max-w-7xl mx-auto z-20 sm:items-center ">
//             <motion.div
//                 initial={{
//                     x: -500,
//                     opacity: 0,
//                     scale: 0.5
//                 }}
//                 animate={{
//                     x: 0,
//                     opacity: 1,
//                     scale: 1
//                 }}
//                 transition={{
//                     duration: 1.5,
//                 }}
//                 className="flex flex-row items-center">

//                 {socials.map((social) => (
//                     <SocialIcon
//                         key={social._id}
//                         url={social.url}
//                         fgColor="#fff"
//                         bgColor="transparent"
//                         className="rasenganCursor rounded-full hover:border hover:border-white hover:bg-[#ff4500]"
//                     />
//                 ))}
//             </motion.div>

//             <Link href="#contact">
//                 <motion.div
//                     initial={{
//                         x: 500,
//                         opacity: 0,
//                         scale: 0.5
//                     }}
//                     animate={{
//                         x: 0,
//                         opacity: 1,
//                         scale: 1
//                     }}
//                     transition={{
//                         duration: 1.5
//                     }}
//                     className="flex flex-row items-center mt-3 md:mt-0 rasenganCursor">
//                         <EnvelopeOpenIcon className="text-white hover:text-[#ff4500] h-6 w-6 mr-3"/>
//                         <p className="ninjaText hover:text-[#FF4500] tracking-[2px] uppercase hidden mr-4 md:inline-flex text-lg">Contact</p>
//                 </motion.div>
//             </Link>
//         </header>
//       )
// }

import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";
import {
  DocumentArrowDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="kunaiCursor fixed top-0 w-full z-50 bg-gradient-to-l from-[#e31e24]/80 via-[#fa5000]/80 to-zinc-900/80 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-20 md:h-20">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link
              href="#hero"
              className="rasenganCursor text-2xl md:text-3xl font-bold"
            >
              <span className="narutoText2 text-[#e31e24] hover:text-[#fa5000] transition-colors duration-300">
                Mardan
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden lg:flex items-center space-x-8"
          >
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="ninjaText hover:rasenganCursor text-white/80 hover:text-[#fa5000] transition-colors duration-300 text-sm md:text-md lg:text-base font-medium tracking-[1px] uppercase"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>

          {/* Right Section: Socials + Resume */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:flex items-center space-x-4"
          >
            {/* Social Icons */}
            <div className="flex items-center space-x-2">
              {socials.slice(0, 3).map((social) => (
                <SocialIcon
                  key={social._id}
                  url={social.url}
                  fgColor="#fff"
                  bgColor="transparent"
                  className="rasenganCursor !w-14 !h-14 hover:!bg-[#fa5000] transition-all duration-300 rounded-full"
                />
              ))}
            </div>

            {/* Resume Button */}
            <Link
              href="../assets/resume.pdf"
              target="_blank"
              className="rasenganCursor flex items-center gap-2 px-4 py-2 bg-gradient-to-tl from-zinc-900/80 via-[#e31e24] to-[#fa5000]/80 hover:from-[#e31e24]/80 hover:to-[#fa5000]/80 border border-[#e31e24] hover:border-[#fa5000] rounded-full transition-all duration-300 group"
            >
              <DocumentArrowDownIcon className="w-4 h-4 text-white/90 group-hover:text-black transition-colors duration-300" />
              <span className="ninjaText text-white/90 group-hover:text-black text-sm font-medium tracking-[1px] uppercase">
                Resume
              </span>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:hidden"
          >
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rasenganCursor p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6 text-white" />
              ) : (
                <Bars3Icon className="w-6 h-6 text-white" />
              )}
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-white/10 py-4"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="ninjaText rasenganCursor text-white hover:text-[#ff4500] transition-colors duration-300 text-base font-medium tracking-[1px] uppercase px-2 py-1"
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Socials */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center space-x-2">
                  {socials.slice(0, 3).map((social) => (
                    <SocialIcon
                      key={social._id}
                      url={social.url}
                      fgColor="#fff"
                      bgColor="transparent"
                      className="rasenganCursor !w-12 !h-12 hover:!bg-[#ff4500] transition-all duration-300 rounded-full"
                    />
                  ))}
                </div>

                {/* Mobile Resume Button */}
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className="rasenganCursor flex items-center gap-2 px-3 py-2 bg-gradient-to-tl from-zinc-900/80 via-[#e31e24] to-[#fa5000]/80 hover:from-[#e31e24]/80 hover:to-[#fa5000]/80 border border-[#e31e24] hover:border-[#fa5000] rounded-full transition-all duration-300 group"
                >
                  <DocumentArrowDownIcon className="w-4 h-4 text-white/90 group-hover:text-black transition-colors duration-300" />
                  <span className="ninjaText text-white/90 group-hover:text-black text-sm font-medium tracking-[1px] uppercase">
                    Resume
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
