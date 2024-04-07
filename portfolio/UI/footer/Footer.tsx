import React from "react";
import email from "@/public/Email Icon.svg";
import Image from "next/image";
import whatsapp from "@/public/whatsapp.svg";
import gmail from "@/public/gmail.svg";
function Footer() {
  return (
    <div
      id="contact"
      className=" bg-[#1E1E1D] flex justify-center items-center w-screen translate-x-[-50%] ml-[50%] gap-5"
    >
      <div className="my-20 max-w-[700px] flex justify-start items-start flex-col gap-5">
        <p className="text-4xl font-extrabold contact text-center w-full sm:text-start">
          CONTACT
        </p>
        <div>
          <p className="text-sm font-light break-words text-justify text-slate-400 my-5">
            Feel free to reach out to me via email given below. I look forward
            to connecting with you and discussing how we can collaborate to
            bring your project to life. Your inquiries are always welcome, and I
            am committed to responding promptly to ensure a seamless
            communication experience. Let's work together to turn your ideas
            into reality!
          </p>
        </div>
        <div>
          <a className="flex gap-3" href="mailto:info.waseem1234@gmail.com">
            <Image src={email} alt="email envelope" height={20} />
            info.waseem1234@gmail.com
          </a>
        </div>
        <div className="flex gap-5 justify-center w-full">
          {/* <Image src={whatsapp} alt="whatsapp" height={20} width={20} /> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
