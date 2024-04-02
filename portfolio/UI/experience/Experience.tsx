import Image from 'next/image'
import React from 'react';
import google from "../../public/google-logo.png";

function Experience() {
  return (
    <div className='my-20 max-w-[700px] mx-auto'>
    <p className="text-4xl font-extrabold exp text-center my-10">
    EXPERIENCE
  </p>
  <div className='experience flex flex-col gap-5 items-center justify-center'>
    {/* card */}
    <div className=''>
        <div className='w-full flex justify-between items-center'>
            <div className='flex justify-start items-center gap-4'>
                <Image src={google} alt='google logo' height={32} width={33} />
                <h1 className='text-[21px] font-bold'>Lead Software Engineer at Google</h1>
            </div>
            <p className='text-slate-400 italic'>Dec 2012 - Nov 2015</p>
        </div>
        <p className='text-[14px] break-words text-start text-slate-400 my-5'>As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p>
    </div>
     {/* card */}
     <div className=''>
        <div className='w-full flex justify-between items-center'>
            <div className='flex justify-start items-center gap-4'>
                <Image src={google} alt='google logo' height={32} width={33} />
                <h1 className='text-[21px] font-bold'>Lead Software Engineer at Google</h1>
            </div>
            <p className='text-slate-400 italic'>Dec 2012 - Nov 2015</p>
        </div>
        <p className='text-[14px] break-words text-start text-slate-400 my-5'>As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p>
    </div>
     {/* card */}
     <div className=''>
        <div className='w-full flex justify-between items-center'>
            <div className='flex justify-start items-center gap-4'>
                <Image src={google} alt='google logo' height={32} width={33} />
                <h1 className='text-[21px] font-bold'>Lead Software Engineer at Google</h1>
            </div>
            <p className='text-slate-400 italic'>Dec 2012 - Nov 2015</p>
        </div>
        <p className='text-[14px] break-words text-start text-slate-400 my-5'>As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p>
    </div>
  </div>


</div>
  )
}

export default Experience