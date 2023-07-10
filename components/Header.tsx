import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from "next/link";
import { Social } from '../typings';
import { EnvelopeOpenIcon } from '@heroicons/react/24/solid'


type Props = {
    socials: Social[]
}

export default function Header({ socials }: Props) {
    return (
        <header className="sticky top-0 flex justify-between max-w-7xl mx-auto z-20 sm:items-center ">
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex flex-row items-center">

                {socials.map((social) => (
                    <SocialIcon 
                        key={social._id}
                        url={social.url} 
                        fgColor="#F58B54"
                        bgColor="transparent"
                    />
                ))}
            </motion.div>
    
            <Link href="#contact">
                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 1.5
                    }}
                    className="flex flex-row items-center cursor-pointer">
                        <EnvelopeOpenIcon className="text-[#F58B54] my-3 h-6 w-6 mr-3"/>
                        {/* <SocialIcon
                            className="cursor-pointer" 
                            network="email" 
                            fgColor="#F58B54"
                            bgColor="transparent"
                        /> */}
                        <p className="uppercase hidden mr-4 md:inline-flex text-sm text-[#F58B54]">Get in touch</p>    
                </motion.div>
            </Link>
        </header>
      )
}