import Image from "next/image";
import React from "react";
import js from "@/public/javascript.png";
import node from "@/public/nodejs.png";
import html from "@/public/html.png";
import react from "@/public/reactjs.png";
import css from "@/public/css.png";
import Marquee from "react-fast-marquee";

function Technologies() {
  return (
    <div className="flex justify-center items-center gap-10 flex-col my-20">
      <p className="text-xl text-center font-semibold text-[#C5C5C5]">
        EXPERIENCE WITH
      </p>
      <Marquee autoFill={true}>
        <div className="mx-16">
          <Image
            className="mx-200px block"
            src={js}
            alt="javascript"
            height={42}
            width={42}
          />
        </div>
        <div className="mx-16">
          <Image src={html} alt="javascript" height={42} width={42} />
        </div>
        <div className="mx-16">
          <Image src={react} alt="javascript" height={42} width={42} />{" "}
        </div>
        <div className="mx-16">
          <Image src={css} alt="javascript" height={42} width={42} />
        </div>
        <div className="mx-16">
          <Image src={node} alt="javascript" height={42} width={42} />
        </div>
      </Marquee>
    </div>
  );
}

export default Technologies;
