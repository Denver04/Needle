
import React, { useState, useEffect, Fragment, use } from 'react';
import { Card } from './Card/Card';
import style from "./CSS/card.module.css"
import { ClipLoader } from 'react-spinners';
import { BiSolidError } from 'react-icons/bi';

export const Post = () => {
  const [data, setData] = useState([]);
  const [page , setPage] = useState(1);
  const [loading , setLoading] = useState(false);

  // useEffect(()=>{
  //   setLoading(false);
  //   const fetchData = async () => {
  //     const res = await fetch(`https://api.unsplash.com/photos?page=${page}&client_id=DxAAYPqgETePXR9UaMpfTOdvmNkAmbwkce0wpXi88r8`)
  //     const data = await res.json();

  //     setData((prev) => [...prev , ...data]);
  //   }
  //   fetchData();
  //   setLoading(true);
  // } , [page])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(false);
        const res = await fetch(`https://api.unsplash.com/photos?page=${page}&client_id=DxAAYPqgETePXR9UaMpfTOdvmNkAmbwkce0wpXi88r8`);
        const data = await res.json();
        setData((prev) => [...prev, ...data]);
      } catch (error) {
        // console.error('Error fetching data:', error);
        setLoading(true);
      }
    };

    fetchData();
  }, [page]);


  const handleScroll = () => {
    try {
      if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.offsetHeight) {
        setPage((prev) => prev + 1 )
      };
    } catch (error) {
      return error;
    }
  }

  const loader = {
    position: "absolute",
    top: "10rem",
    left: "50%",
    width: "50px",
    height : "50px",
  }

  useEffect(()=>{
    window.addEventListener('scroll' , handleScroll);
    return () => window.removeEventListener('scroll' , handleScroll);
  })

  return (
    <>
      {
      loading ? <h1 className={style.error}> <BiSolidError /> Error</h1> :
      data.length !== 0 ? (
        <div style={{padding:"2rem 0"}}>
      {
        data.map((item) => {
        return(
          <div key={item.id} className={style.making_responsive_card}>
            <Card 
              item={item}
              loading={loading}
            />
          </div>
        )
      })
      }
    </div> ) : 
      (
        (
          <ClipLoader
              className={style.loader}          
              color="#3f36d6"
              loading={true}
              size={200}
              cssOverride={loader}
              aria-label="Loading Spinner"
              data-testid="loader"
        />
      )   
      )
    }
    </>
  );
};
