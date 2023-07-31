"use client";

import Image from "next/image";
import React, { useContext } from "react";
// import utamhime from "../../public/Images/utahime.png";
import style from "./CSS/navbar.module.css";
import Link from "next/link";
import { MdDarkMode , MdLightMode } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import Theme from "./Context/Theme";


export const Navbar = () => {
  const { mode, toggleMode } = useContext(Theme);
  const handleDark = () => {
    toggleMode("light" ? "dark" : "light");
  }

  return (
    <nav className={style.nav} theme={mode}>
      <div className={style.nav_head}>
        <div className={style.image_div}>
          <h1>A</h1>
        </div>
        <div className={style.nav_header}>
          <h2>Instagram</h2>
        </div>
      </div>
      <div className={style.nav_link}>
        <Link className={style.mode_icon} href="/">
          <AiFillHome className={style.linking_icon} size="1.5rem" />
        </Link>
        <div style={{backgroundColor:"unset"}}>
            <Link className={style.mode_icon} href="/User/Raimondklavins">
                <BsFillPersonFill className={style.linking_icon} size="1.5rem" />
            </Link>
        </div>
        <div className={style.mode_icon}>
        {
            mode == "light" ?
            <MdDarkMode className={style.linking_icon} size="1.5rem" onClick={handleDark}/> :
            <MdLightMode className={style.linking_icon} size="1.5rem" onClick={handleDark} />
        }
        </div>
      </div>
    </nav>
  );
};
