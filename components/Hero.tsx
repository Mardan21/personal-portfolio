import React, { useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [svgLoaded, setSvgLoaded] = useState(true);
  const [role] = useTypewriter({
    words: ["CODE NINJA", "DIGITAL HOKAGE", "DATABASE DATTEBAYO!"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="kunaiCursor h-screen flex flex-row space-x-0 lg:space-x-4 items-center justify-center text-center overflow-hidden">
      {/* <img
        className="relative flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-full md:w-64 md:h-64 xl:w-[400px] xl:h-[400px]"
        src={urlFor(pageInfo?.heroImage).url()}
        alt=""
      /> */}

      <div className="z-20 lg:w-[65%] xl:w-[55%]">
        <h2 className="ninjaText text-sm sm:text-sm md:text-sm lg:text-lg uppercase text-white/90 pb-10 tracking-[3px] md:tracking-[5px] xl:tracking-[10px]">
          &lt; {role} <Cursor cursorColor="#fff" /> &gt;
        </h2>

        {/* <h1 className="narutoTextName text-5xl  lg:text-[80px] px-4 tracking-[6px]">
          Mardan &nbsp; Mahmut
        </h1> */}

        <div className="flex justify-center mb-6">
          <img
            src="/assets/mardan_naruto_logo.svg"
            alt="Mardan Mahmut"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto"
            style={{
              filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))",
            }}
          />
        </div>

        <div className="flex flex-col sm:flex-col md:flex-row justify-center space-y-3 sm:space-y-4 md:space-y-0 md:space-x-10 pt-6 md:pt-10">
          <Link href="#experience">
            <button className="rasenganCursor ninjaText text-white/90 heroButton tracking-[4px] w-[200px] sm:w-[200px] md:w-[200px] lg:w-[220px] xl:w-[300px] text-sm sm:text-sm md:text-md lg:text-lg">
              Experience
            </button>
          </Link>
          <Link href="#projects">
            <button className="rasenganCursor ninjaText text-white/90 heroButton tracking-[4px] w-[200px] sm:w-[200px] md:w-[200px] lg:w-[220px] xl:w-[300px] text-sm sm:text-sm md:text-md lg:text-lg">
              Projects
            </button>
          </Link>
          {/* <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link> */}
        </div>
      </div>

      {/* <div className="">
        <img
          className="hidden lg:block relative flex-shrink-0 w-36 h-36 rounded-full object-cover border border-black md:rounded-3xl md:w-64 md:h-72 xl:w-[20rem] xl:h-[22rem]"
          src={urlFor(pageInfo?.heroImage).url()}
          alt=""
        />
      </div> */}
      {/* <img 
          className="hidden lg:block relative flex-shrink-0 w-24 h-36 rounded-full object-cover border border-black md:rounded-3xl md:w-64 md:h-64 xl:w-[400px] xl:h-[400px]"
          src={urlFor(pageInfo?.heroImage).url()} 
          alt=""
      /> */}
    </div>
  );
}
