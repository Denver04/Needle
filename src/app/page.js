"use client";

import Image from "next/image";
import styles from "./page.module.css";
// "use client";

import { useSelector } from "react-redux";
import { Body } from "../Components/Body.js";
import { useContext } from "react";
import Theme from "@/Components/Context/Theme";

export default function Home() {
  const { mode } = useContext(Theme);

  return (
    <main theme={mode}>
      <Body />
    </main>
  );
}
