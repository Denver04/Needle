"use client";

import React, { useContext } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai';
import style from "../CSS/navbar.module.css";
import Theme from '../Context/Theme';

export const Button = () => {

    const goTop = () => {
        // useEffect(()=>{
            window.scrollTo( 0, 0,'smooth')
        // }, [])
    }

  return (
    <div className={style.to_top} onClick={goTop}>
        <AiOutlineArrowUp />
    </div>
  )
}
