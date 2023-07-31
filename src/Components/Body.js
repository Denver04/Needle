"use client"

import React from 'react';
import { Navbar } from './Navbar';
import { Post } from './Post';
import { Card } from './Card/Card';
import { Photo } from './Photos/Photo';
import style from "./CSS/card.module.css"

export const Body = () => {
  return (
    <div className={style.most_above_card}>
        <Post />
    </div>
  )
}
