"use client";

import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai';
import style from "../CSS/navbar.module.css";

export const Button = () => {

    const goTop = () => {
      window.scrollTo( 0, 0,'smooth')
    }

  return (
    <div className={style.to_top} onClick={goTop}>
        <AiOutlineArrowUp />
    </div>
  )
}
