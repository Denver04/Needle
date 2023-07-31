
import React, { useState, useEffect, Fragment, use } from 'react';
import { Card } from './Card/Card';
import style from "./CSS/card.module.css"
import { ClipLoader } from 'react-spinners';

export const Post = () => {
  const [data, setData] = useState([]);
  const [page , setPage] = useState(1);
  const [loading , setLoading] = useState(false);

  useEffect(()=>{
    setLoading(false);
    const fetchData = async () => {
      const res = await fetch(`https://api.unsplash.com/photos?page=${page}&query=dog&client_id=DxAAYPqgETePXR9UaMpfTOdvmNkAmbwkce0wpXi88r8`)
      const data = await res.json();

      setData((prev) => [...prev , ...data]);
    }
    fetchData();
    setLoading(true);
  } , [page])


  const handleScroll = () => {
    try {
      if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.offsetHeight) {
        setPage((prev) => prev + 1 )
      };
    } catch (error) {
      
    }
  }

  const loader = {
    display : "flex",
    alignItems : "center",
    justifyItems : "center",
    width: "40px",
    height : "40px",
    marginTop : "10rem"
  }

  useEffect(()=>{
    window.addEventListener('scroll' , handleScroll);
    return () => window.removeEventListener('scroll' , handleScroll);
  })
  
  // console.log(data);
  return (
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
  );
};
