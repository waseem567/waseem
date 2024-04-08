import Image from "next/image";
import React from "react";
import google from "@/public/next.svg";
const EXPERIENCE = [
  {
    companyTitle: "Frontend Development | Content Arcade Pvt Ltd.",
    date: "Jun 2021 - Aug 2021",
    description:
      "I focused on frontend design and successfully built numerous frontend pages using Bootstrap 5. This experience allowed me to enhance my skills in creating responsive and visually appealing user interfaces while gaining practical knowledge in modern web development frameworks.",
  },
  {
    companyTitle: "MERN Bootcamp | Netixsol Blockchain Development Company.",
    date: "Nov 2023 - Mar 2024",
    description:
      "During my MERN Stack bootcamp experience, I delved into a comprehensive range of technologies, including HTML, CSS, Tailwind CSS, React, Next.js, Node.js, Express.js, and Nest.js. Through hands-on projects and intensive training, I honed my skills in frontend and backend development, mastering the art of crafting responsive and visually appealing user interfaces. I leveraged the power of React and Next.js for dynamic frontend experiences, while Node.js and Express.js facilitated robust backend logic. Additionally, my exploration of Nest.js enriched my understanding of scalable and efficient API development. Throughout the bootcamp, I tackled numerous exciting projects that showcased my proficiency in these technologies, solidifying my expertise in the MERN stack ecosystem.",
  },
];
function Experience() {
  return (
    <div
      data-aos="fade-up"
      id="experience"
      className="my-20 max-w-[700px] mx-auto"
    >
      <p className="text-4xl font-extrabold exp text-center my-10">
        EXPERIENCE
      </p>
      <div className="experience flex flex-col gap-5 items-center justify-center">
        {/* card */}
        {EXPERIENCE.map((exp, index) => (
          <div className="p-5" key={index}>
            <div className="w-full flex-col flex sm:flex-row justify-between items-start">
              <div className="flex justify-start items-start gap-4 flex-1 flex-col md:flex-row">
                <div className="h-[40px] font-black text-lg flex justify-center items-center w-[40px] bg-gray-800 exp border-2 border-[#1373d1] rounded-full">
                  {index + 1}
                </div>
                <h1 className="sm:text-xl text-md font-bold flex-[3]">
                  {exp.companyTitle}
                </h1>
                <p className="text-xs md:flex-2 sm:flex-1 text-slate-400 sm:text-end italic w-full sm:w-max text-center block">
                  {exp.date}
                </p>
              </div>
            </div>

            <p className="text-sm break-words text-justify text-slate-400 py-4">
              {exp.description}
            </p>
            <div className="border-b border-[#1373d1] border-[4px] w-1/2 my-1 mx-auto"></div>
          </div>
        ))}
      </div>
      {/* <Image src={google} alt="svg" /> */}
    </div>
  );
}

export default Experience;
