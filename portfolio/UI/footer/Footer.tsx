import React from "react";
import email from "@/public/Email Icon.svg";
import Image from "next/image";
import whatsapp from "@/public/whatsapp.svg";
import gmail from "@/public/gmail.svg";
function Footer() {
  return (
    <div className=" bg-[#1E1E1D] flex justify-center items-center w-screen translate-x-[-50%] ml-[50%] gap-5">
      <div className="my-20 max-w-[700px] flex justify-start items-start flex-col gap-5">
        <p className="text-4xl font-extrabold contact text-start">
          CONTACT
        </p>
        <div>
          <p className="text-sm font-light break-words text-start text-slate-400 my-5">
            Seasoned Full Stack Software Engineer with over 8 years of hands-on
            experience in designing and implementing robust, scalable, and
            innovative web solutions. Adept at leveraging a comprehensive skill
            set encompassing front-end and back-end technologies{" "}
          </p>
        </div>
        <div className="font-semibold text-sm flex gap-3">
          <Image src={email} alt="email envelope" height={20} />
          info.waseem1234@gmail.com
        </div>
        <div className="flex gap-5">
            <Image src={whatsapp} alt="whatsapp" height={20} width={20} />
            <Image src={gmail} alt="whatsapp" height={20} width={20} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
