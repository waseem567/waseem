import Image from "next/image";
import React from "react";
import avatar from "@/public/Avatar.png";

function Hero() {
  return (
    <div className="hero">
      <div className="avatar">
        <Image src={avatar} alt="avatar of main page" />
      </div>
      <p className="bold_text">
        I do code and <br /> make content{" "}
        <span className="colorfull_text">about it!</span>
      </p>
      <p className="para text-slate-200">
        I am a seasoned full-stack software engineer with over <br />
        8 years of professional experience, specializing in backend development.{" "}
        <br />
        My expertise lies in crafting robust and scalable SaaS-based <br />
        architectures on the Amazon AWS platform.
      </p>
      <div className="btn_wrapper sm:flex-row flex-col"><button className="btn">Get In Touch</button><button className="cv_btn">Download CV</button></div>
    </div>
  );
}

export default Hero;
