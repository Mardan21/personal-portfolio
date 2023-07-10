import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    pageInfo: PageInfo
}

export default function About({ pageInfo }: Props) {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-[#F58B54] text-xl md:text-2xl">
            About
        </h3>

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
            className="-mb-20 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover md:rounded-xl md:w-64 md:h-72 xl:w-[400px] xl:h-[480px]"
        />
        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl text-[#DFDDC7] font-semibold" >Here's a <span className="underline decoration-[#F58B54]/50">little</span>{" "}about me</h4>
            <p className="text-sm text-[#DFDDC7]">
                {pageInfo?.backgroundInformation}
            </p>
        </div>
    </motion.div>
  ) 
}