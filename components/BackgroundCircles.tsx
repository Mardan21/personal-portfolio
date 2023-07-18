import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
    initial={{
        opacity: 0,
    }} 
    animate={{
        scale: [1, 1.5, 2, 1],
        opacity: [0.1, 0.2, 0.4, 0.1, 1.0],
        borderRadius: ["20%", "20%", "40%", "20%"],
    }}
    transition={{
        duration: 2,
    }}
    
    className="relative flex justify-center items-center">
        <div className="absolute border border-[#DFDDC7] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
        <div className="absolute border border-[#F58B54] rounded-full h-[300px] w-[300px] mt-52 animate-pulse" />
        <div className="absolute border border-[#A34A28] rounded-full h-[450px] w-[450px] mt-52 " />
    </motion.div>
  )
}