import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div
      id="home"
      className="navbar hidden bg-black md:flex w-screen translate-x-[-50%] ml-[50%] px-5"
    >
      <div className="logo">
        <Image src={logo} alt="navbar-logo" height={70} width={70} />
      </div>
      <div className="">
        <ul className="list">
          <li className="link">
            <Link href={"#home"}>Home</Link>
          </li>
          <li className="link">
            <Link href={"#projects"}>Projects</Link>
          </li>
          <li className="link">
            <Link href={"#experience"}>Experience</Link>
          </li>
          <li className="link">
            <Link href={"#contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
