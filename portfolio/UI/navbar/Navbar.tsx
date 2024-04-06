
import React from 'react';
import logo from "@/public/logo.png";
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  return (
    <div className='navbar w-screen translate-x-[-50%] ml-[50%]'>
        <div className='logo'><Image src={logo} alt="navbar-logo" height={70} width={70} /></div>
        <div className=''>
            <ul className='list'>
                <li className='link'><Link href={""}>Home</Link></li>
                <li className='link'><Link href={""}>Projects</Link></li>
                <li className='link'><Link href={""}>Experience</Link></li>
                <li className='link'><Link href={""}>Contact</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;