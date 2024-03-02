import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo
};

export default function Hero({ pageInfo }: Props) {

  const [role] = useTypewriter({
    words: [
      "SOFTWARE ENGINEER",
      "COFFEE ENTHUSIAST",
      "LEETCODE LOVER ;)",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  
  return (
    <div className="kunaiCursor h-screen flex flex-row space-x-20 items-center justify-center text-center overflow-hidden">

      {/* <img 
        className="relative flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-full md:w-64 md:h-64 xl:w-[400px] xl:h-[400px]"
        src={urlFor(pageInfo?.heroImage).url()} 
        alt=""
      /> */}

      <div className="z-20">
        <h2 className="ninjaText lg:text-xl uppercase text-black pb-10 tracking-[15px]">
          {/* {pageInfo?.role} */}
          &lt; {role} <Cursor cursorColor="#fff"/> &gt;
        </h2>

        <h1 className="narutoTextName text-5xl lg:text-[80px] px-4 tracking-[6px]">
          Mardan &nbsp; Mahmut
        </h1>

        <div className="flex flex-row justify-center space-x-10 pt-10">
          {/* <Link href="#about">
            <button className="heroButton">About</button>
          </Link> */}
          <Link href="#experience">
            <button className="rasenganCursor ninjaText heroButton tracking-[4px] w-[300px]">Experience</button>
          </Link>
          <Link href="#projects">
            <button className="rasenganCursor ninjaText heroButton tracking-[4px] w-[300px]">Projects</button>
          </Link>
          {/* <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link> */}
        </div>
      </div>
      <img 
          className="relative flex-shrink-0 w-36 h-36 rounded-full object-cover border border-black md:rounded-3xl md:w-64 md:h-64 xl:w-[400px] xl:h-[400px]"
          src={urlFor(pageInfo?.heroImage).url()} 
          alt=""
      />
    </div>
  );
}

