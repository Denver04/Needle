import React, { useState, useEffect, Fragment, use } from "react";
import { Card } from "./Card/Card";
import style from "./CSS/card.module.css";
import { ClipLoader } from "react-spinners";
import { BiSolidError } from "react-icons/bi";
import { debounce } from "lodash";

export const Post = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(false);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/photos?page=${page}&client_id=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        const data = await res.json();
        setData((prev) => [...prev, ...data]);
      } catch (error) {
        setLoading(true);
      }
    };

    fetchData();
  }, [page]);

  const handleScroll = debounce(() => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 40 >=
        document.documentElement.offsetHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {}
  }, 500);

  useEffect(() => {
    const handleScrollEvent = () => {
      handleScroll(); 
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, [handleScroll]);

  const loader = {
    position: "absolute",
    top: "10rem",
    left: "50%",
    width: "50px",
    height: "50px",
  };

  return (
    <>
      {loading ? (
        <h1 className={style.error}>
          <BiSolidError /> Error
        </h1>
      ) : data.length !== 0 ? (
        <div style={{ padding: "2rem 0" }}>
          {data.map((item) => {
            return (
              <div key={item.id} className={style.making_responsive_card}>
                <Card item={item} loading={loading} />
              </div>
            );
          })}
        </div>
      ) : (
        <ClipLoader
          className={style.loader}
          color="#3f36d6"
          loading={true}
          size={200}
          cssOverride={loader}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </>
  );
};
