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
        <header className="kunaiCursor sticky top-0 flex justify-between max-w-7xl mx-auto z-20 sm:items-center ">
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
                        fgColor="#fff"
                        bgColor="transparent"
                        className="rasenganCursor rounded-full hover:border hover:border-white hover:bg-[#ff4500]"
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
                    className="flex flex-row items-center mt-3 md:mt-0 rasenganCursor">
                        <EnvelopeOpenIcon className="text-white hover:text-[#ff4500] h-6 w-6 mr-3"/>
                        <p className="ninjaText hover:text-[#FF4500] tracking-[2px] uppercase hidden mr-4 md:inline-flex text-lg">Contact</p>    
                </motion.div>
            </Link>
        </header>
      )
}