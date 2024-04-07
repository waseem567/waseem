import Image from "next/image";
import React from "react";
import avatar from "@/public/Avatar.png";

function Hero() {
  return (
    <>
      <div className="hero w-screen translate-x-[-50%] ml-[50%] relative z-10mx-auto">
        <div className="avatar">
          <Image src={avatar} alt="avatar of main page" />
        </div>
        <p className="bold_text">
          I am Waseem <br />
          <span className="colorfull_text">Full Stack Developer</span>
        </p>

        <div className="btn_wrapper sm:flex-row flex-col">
          <button className="btn">Get In Touch</button>
          <a className="" href="cv-waseem.pdf" title="" download>
            <button className="cv_btn">Download CV</button>
          </a>
        </div>
      </div>
      <div className="relative">
        <p className="absolute bottom-10 left-[50%] translate-x-[-50%] font-extralight text-lg mx-auto w-full text-center text-slate-200 z-20">
          I'm a seasoned MERN stack developer <br /> with expertise in Next.js
          and Nest.js frameworks, <br /> alongside proficiency in software
          testing. With a year of experience, <br /> I specialize in crafting
          scalable solutions that prioritize performance and quality.
        </p>
      </div>
    </>
  );
}

export default Hero;
