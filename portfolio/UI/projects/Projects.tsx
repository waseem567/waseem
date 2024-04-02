import React from 'react';
import projectImage from "../../public/p1.png";
import projectImage2 from "../../public/p2.png"
import Image from 'next/image';
function Projects() {
  return (
    <div className='my-20'>
        <p className="text-4xl font-extrabold text-[#FF8660] text-center my-10">
        PROJECTS
      </p>
      {/* projects */}
      <div className='flex justify-center items-center flex-wrap gap-5'>
        {/* project card */}
        <div className='h-[300px] w-[390px] gap-0 bg-[#2A2A2A] rounded-[18px] overflow-hidden'>
            <Image src={projectImage} height={235} alt="project image" />
            <div className='px-5 flex justify-center items-center flex-col pt-3'>
                <p className='text-[10px] font-extrabold w-full text-start'>CLICK HERE TO VISIT</p>
                <p className='text-[20px] font-extrabold w-full text-start'>CSS TUTORIAL</p>
            </div>
        </div>{/* project card */}
        <div className='h-[300px] w-[390px] gap-0 bg-[#2A2A2A] rounded-[18px] overflow-hidden'>
            <Image src={projectImage2} height={235} alt="project image" />
            <div className='px-5 flex justify-center items-center flex-col pt-3'>
                <p className='text-[10px] font-extrabold w-full text-start'>CLICK HERE TO VISIT</p>
                <p className='text-[20px] font-extrabold w-full text-start'>CSS TUTORIAL</p>
            </div>
        </div>
        {/* project card */}
        <div className='h-[300px] w-[390px] gap-0 bg-[#2A2A2A] rounded-[18px] overflow-hidden'>
            <Image src={projectImage} height={235} alt="project image" />
            <div className='px-5 flex justify-center items-center flex-col pt-3'>
                <p className='text-[10px] font-extrabold w-full text-start'>CLICK HERE TO VISIT</p>
                <p className='text-[20px] font-extrabold w-full text-start'>CSS TUTORIAL</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects