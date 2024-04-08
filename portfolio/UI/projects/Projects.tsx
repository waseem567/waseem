import React from "react";
import projectImage from "@/public/clinin.png";
import projectImage2 from "@/public/Black Minimalist Interiors Design YouTube Thumbnail.png";
import projectImage3 from "@/public/chatbot.png";
import projectImage4 from "@/public/daraz.png";
import projectImage5 from "@/public/githubmain.png";
import Image from "next/image";
function Projects() {
  return (
    <div id="projects" className="my-20 px-2">
      <p className="text-4xl font-extrabold text-[#FF8660] text-center my-10">
        PROJECTS
      </p>
      {/* projects */}
      <div className="flex justify-center items-center flex-wrap gap-5">
        {/* project card */}
        <a
          className="block w-[310px] sm:w-max"
          target="_blank"
          href="https://github.com/waseem567/Clinic-Management-using-Socket.io"
        >
          <div className="transition-all ease-in-out duration-700 hover:scale-105 sm:h-[300px] w-[310px] sm:w-[390px] gap-0 bg-[#2A2A2A] rounded-[18px] overflow-hidden">
            <Image
              className="block w-full"
              src={projectImage}
              height={235}
              alt="project image"
            />
            <div className="px-5 flex justify-center items-center flex-col pt-3">
              <p className="text-[10px] font-extrabold w-full text-start">
                CLICK HERE TO VISIT
              </p>
              <p className="text-[20px] font-extrabold w-full text-start">
                CLINIC MANAGEMENT
              </p>
            </div>
          </div>
        </a>
        {/* project card */}
        <a
          className="block w-[310px] sm:w-max"
          target="_blank"
          href="https://github.com/waseem567/BlogFullStackApp-Frontend"
        >
          <div className="transition-all ease-in-out duration-700 hover:scale-105 sm:h-[300px] w-[310px] sm:w-[390px]  gap-0 bg-[#2A2A2A] rounded-[18px] overflow-hidden">
            <Image src={projectImage2} height={235} alt="project image" />
            <div className="px-5 flex justify-center items-center flex-col pt-3">
              <p className="text-[10px] font-extrabold w-full text-start">
                CLICK HERE TO VISIT
              </p>
              <p className="text-[20px] font-extrabold w-full text-start">
                BLOG APP
              </p>
            </div>
          </div>
        </a>
        {/* project card */}
        <a
          className="block w-[310px] sm:w-max"
          target="_blank"
          href="https://github.com/waseem567/react-chatbot-with-chatGPT-api"
        >
          <div className="transition-all ease-in-out duration-700 hover:scale-105 sm:h-[300px] w-[310px] sm:w-[390px]  gap-0 bg-[#2A2A2A] rounded-[18px] overflow-hidden">
            <Image src={projectImage3} height={235} alt="project image" />
            <div className="px-5 flex justify-center items-center flex-col pt-3">
              <p className="text-[10px] font-extrabold w-full text-start">
                CLICK HERE TO VISIT
              </p>
              <p className="text-[20px] font-extrabold w-full text-start">
                CHAT BOT
              </p>
            </div>
          </div>
        </a>
        {/* project card */}
        <a
          className="block w-[310px] sm:w-max"
          target="_blank"
          href="https://github.com/waseem567/React-Daraz-Landing-Page"
        >
          <div className="transition-all ease-in-out duration-700 hover:scale-105 sm:h-[300px] w-[310px] sm:w-[390px]  gap-0 bg-[#2A2A2A] rounded-[18px] overflow-hidden">
            <Image src={projectImage4} height={235} alt="project image" />
            <div className="px-5 flex justify-center items-center flex-col pt-3">
              <p className="text-[10px] font-extrabold w-full text-start">
                CLICK HERE TO VISIT
              </p>
              <p className="text-[20px] font-extrabold w-full text-start">
                DARAZ MAIN PAGE
              </p>
            </div>
          </div>
        </a>
        {/* project card */}
        <a
          className="block w-[310px] sm:w-max"
          target="_blank"
          href="https://github.com/waseem567"
        >
          <div className="transition-all ease-in-out duration-700 hover:scale-105 sm:h-[300px] w-[310px] sm:w-[390px]  gap-0 bg-[#2A2A2A] rounded-[18px] overflow-hidden">
            <Image src={projectImage5} height={235} alt="project image" />
            <div className="px-5 flex justify-center items-center flex-col pt-3">
              <p className="text-[10px] font-extrabold w-full text-start">
                CLICK HERE TO VISIT
              </p>
              <p className="text-[20px] font-extrabold w-full text-start">
                VISIT MY GITHUB
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Projects;
