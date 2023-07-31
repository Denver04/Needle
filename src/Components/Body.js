"use client"

import React from 'react';
import { Post } from './Post';
import style from "./CSS/card.module.css"

export const Body = () => {
  return (
    <div className={style.most_above_card}>
        <Post />
    </div>
  )
}
