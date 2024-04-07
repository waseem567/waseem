import Image from "next/image";
import React from "react";
import js from "@/public/javascript.png";
import node from "@/public/nodejs.png";
import html from "@/public/html.png";
import react from "@/public/reactjs.png";
import css from "@/public/css.png";
import Marquee from "react-fast-marquee";
import { FaBootstrap, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { DiJqueryLogo, DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";

function Technologies() {
  return (
    <div
      id="technologies"
      className="flex justify-center items-center gap-10 flex-col my-20"
    >
      <p className="text-xl text-center font-semibold text-[#C5C5C5]">
        EXPERIENCE WITH
      </p>
      <Marquee autoFill={true}>
        {/* <div className="mx-16">
          <Image
            className="mx-200px block"
            src={js}
            alt="javascript"
            height={42}
            width={42}
          />
        </div> */}
        {/* <div className="mx-16">
          <Image src={html} alt="javascript" height={42} width={42} />
        </div>
        <div className="mx-16">
          <Image src={react} alt="javascript" height={42} width={42} />{" "}
        </div>
        <div className="mx-16">
          <Image src={css} alt="javascript" height={42} width={42} />
        </div> */}
        <div className="flex flex-col justify-center items-center mx-5 ">
          {/* html */}
          <FaHtml5 className="golden_text origin-center text-red-600 text-7xl " />
          <p>HTML 5</p>
        </div>
        {/* css */}
        <div className="flex flex-col justify-center items-center mx-5">
          <FaCss3Alt className="golden_text origin-center text-[#4da5fc] text-7xl " />
          <p>CSS 3</p>
        </div>
        {/* tailwind */}
        <div className="flex flex-col justify-center items-center mx-5">
          <SiTailwindcss className="golden_text origin-center text-[#4da5fc] text-7xl " />
          <p>TAILWIND</p>
        </div>
        <div className="flex flex-col justify-center items-center mx-5">
          {/* react */}
          <FaBootstrap className="golden_text origin-center text-purple-700 text-7xl" />

          <p>BOOTSTRAP</p>
        </div>

        <div className="flex flex-col justify-center items-center mx-5">
          {/* react */}
          <FaReact className="golden_text origin-center text-[#4da5fc] text-7xl " />
          <p>REACT</p>
        </div>
        <div className="flex flex-col justify-center items-center mx-5">
          {/* next js */}
          <SiNextdotjs className="golden_text origin-center text-[rgb(252,188,77)] text-7xl " />
          <p>NEXT</p>
        </div>
        <div className="flex flex-col justify-center items-center mx-5">
          {/* next js */}
          <DiJqueryLogo className="golden_text origin-center text-blue-700 text-7xl" />

          <p>JQUERY</p>
        </div>
        <div className="flex flex-col justify-center items-center mx-5">
          {/* node js */}
          <FaNode className="golden_text origin-center text-green-700 text-7xl" />

          <p>NODE</p>
        </div>
        <div className="flex flex-col justify-center items-center mx-5">
          {/* js */}
          <IoLogoJavascript className="golden_text origin-center text-yellow-300 text-7xl" />

          <p>JAVASCRIPT</p>
        </div>
        <div className="flex flex-col justify-center items-center mx-5">
          {/* js */}
          <SiExpress className="golden_text origin-center text-white text-7xl" />

          <p>EXPRESS</p>
        </div>
        <div className="flex flex-col justify-center items-center mx-5">
          {/* js */}
          <SiNestjs className="golden_text origin-center text-[crimson] text-7xl" />

          <p>NEST</p>
        </div>
        <div className="flex flex-col justify-center items-center mx-5">
          {/* js */}
          <SiMongodb className="golden_text origin-center text-green-500 text-7xl" />

          <p>MONGODB</p>
        </div>
      </Marquee>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 w-full justify-between min-h-96">
        <div className="golden_text flex-1 flex md:justify-start justify-center items-center md:font-black md:text-5xl text-xl font-semibold bg-white gap-2 my-5 uppercase md:capitalize">
          <span>Frontend</span>
          <br className="hidden md:block" />
          <span>Technologies</span>
        </div>
        <div className="flex-1 ml-auto flex justify-center items-center flex-wrap w-full ">
          <div className="flex flex-col justify-center items-center mx-5 ">
           
            <FaHtml5 className="golden_text origin-center text-red-600 text-7xl " />
            <p>HTML 5</p>
          </div>
          
          <div className="flex flex-col justify-center items-center mx-5">
            <FaCss3Alt className="golden_text origin-center text-[#4da5fc] text-7xl " />
            <p>CSS 3</p>
          </div>
         
          <div className="flex flex-col justify-center items-center mx-5">
            <SiTailwindcss className="golden_text origin-center text-[#4da5fc] text-7xl " />
            <p>TAILWIND</p>
          </div>
          <div className="flex flex-col justify-center items-center mx-5">
           
            <FaBootstrap className="golden_text origin-center text-purple-700 text-7xl" />

            <p>BOOTSTRAP</p>
          </div>

          <div className="flex flex-col justify-center items-center mx-5">
          
            <FaReact className="golden_text origin-center text-[#4da5fc] text-7xl " />
            <p>REACT</p>
          </div>
          <div className="flex flex-col justify-center items-center mx-5">
            
            <SiNextdotjs className="golden_text origin-center text-[rgb(252,188,77)] text-7xl " />
            <p>NEXT</p>
          </div>
          <div className="flex flex-col justify-center items-center mx-5">
           
            <DiJqueryLogo className="golden_text origin-center text-blue-700 text-7xl" />

            <p>JQUERY</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Technologies;
