/* eslint-disable @next/next/no-img-element */
"use client";

// import React from 'react';
import { useContext, useEffect, useState } from "react";
import style from "../../../Components/CSS/userInfo.module.css";
import { MdLocationOn } from "react-icons/md";
import { BiError, BiLogoTwitter, BiWorld } from "react-icons/bi";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { MdOutlineCollections } from "react-icons/md";
import { BsDownload } from "react-icons/bs";
import { BsPersonFillAdd } from "react-icons/bs";
import { RiUserFollowFill } from "react-icons/ri";
import { Photo } from "@/Components/Photos/Photo";
import { ClipLoader } from "react-spinners";
import Theme from "@/Components/Context/Theme";

export default function Userdetail({ params }) {
  const { mode } = useContext(Theme);
  const [information, setInformation] = useState([]);
  const [error , setError] = useState(false);
  const [photoError , setPhotoError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/users/${params.userdetail}?client_id=${process.env.NEXT_PUBLIC_API_KEY}`
          );
          const data = await res.json();
          console.log(data);
    
          setInformation(data);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
    
  }, [params.userdetail]);

  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  const handleScroll = () => {
    try {
      if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.offsetHeight) {
        setPage((prev) => prev + 1 )
      };
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll' , handleScroll);
    return () => window.removeEventListener('scroll' , handleScroll);
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        setPhotoError(false)
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/users/${params.userdetail}/photos?page=${page}&&client_id=${process.env.NEXT_PUBLIC_API_KEY}`
          );
          const data = await res.json();
          console.log(data);
    
          setPhotos((prev) => [...prev , ...data]);
      } catch (error) {
        setPhotoError(true)
      }
    };
    fetchData();
  }, [params.userdetail , page]);

  const loader = {
    "display" : "flex",
    "alignItems" : "center",
    "width": "40px",
    "height" : "40px",
    "marginTop" : "10rem"
}

  return (
    <div style={{width: "100%"}}>
        {
            error ? 
            <div className={style.error}>
                <BiError /> Something Went Wrong
            </div> 
            :
            <>
            { information && (photos.length!==0) ? (
        <div className={style.information} theme={mode}>
          <div className={style.information_above}>
            <div className={style.information_user_basic_detail}>
              <div className={style.image_hire}>
                <div className={style.information_user_image}>
                    <img src={information?.profile_image?.large} alt="user" />
                </div>
                <div className={style.hire_info}>
                <button className={style.hire_me}>Hire me</button>
                    {information?.allow_messages ? (
                        <button className={style.message}>Message</button>
                    ) : (
                        <button className={style.message} disabled style={{backgroundColor:"#c1c1c1"}}>Message</button>
                    )}
                </div>
              </div>
              <div className={style.user_basic_info}>
                <h1>{information?.username}</h1>
                <p>
                  {information?.first_name} {information?.last_name}
                </p>
                {information?.location && (
                  <div className={style.user_location}>
                    <MdLocationOn size="1.3rem" />
                    <h4>{information?.location}</h4>
                  </div>
                )}
                {information?.bio && (
                  <div className={style.user_bio}>
                    <BiWorld size="1.3rem" />
                    <p>{information?.bio}.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={style.information_details}>
            <div className={style.information_follow}>
              <div className={style.card_link}>
                <BsPersonFillAdd className={style.toogle_color} size="1.5rem" />
                <p>
                  Following : <span>{information?.following_count}</span>
                </p>
              </div>
              <div className={style.card_link}>
                <RiUserFollowFill className={style.toogle_color} size="1.3rem" />
                <p>
                  Followers : <span>{information?.followers_count}</span>
                </p>
              </div>
              <div className={style.card_link}>
                <BsDownload size="1.3rem" />
                <p>
                  Total Downloads : <span>{information?.downloads}</span>
                </p>
              </div>
            </div>
            <div className={style.card_link_info}>
              <Link
                href={{
                  pathname:
                    "https://twitter.com/" +
                    params?.userdetail?.social?.twitter_username,
                }}
                className={style.card_link}
              >
                <BiLogoTwitter size="1.3rem" />
                <p>
                  {information?.social?.twitter_username
                    ? information?.social?.twitter_username
                    : "Not a active user"}
                </p>
              </Link>

              <Link
                href={{
                  pathname:
                    "https://instagram.com/" +
                    params?.userdetail?.social?.instagram_username,
                }}
                className={style.card_link}
              >
                <BsInstagram size="1.3rem" />
                <p>
                  {information?.social?.instagram_username
                    ? information?.social?.instagram_username
                    : "Not a active user"}
                </p>
              </Link>

              <Link
                href={{
                  pathname: information?.portfolio_url,
                }}
                className={style.card_link}
              >
                <BiWorld size="1.3rem" />
                <p>
                  {information?.first_name
                    ? information?.first_name
                    : "Didn't have a site"}
                </p>
              </Link>
            </div>
            <div className={style.information_number}>
              <div className={style.card_link}>
                <MdPhotoSizeSelectActual className={style.toogle_color} size="1.5rem" />
                <p>
                  Total Photos : <span>{information?.total_photos}</span>
                </p>
              </div>
              <div className={style.card_link}>
                <MdOutlineCollections size="1.3rem" />
                <p>
                  Total Collection :{" "}
                  <span>{information?.total_collections}</span>
                </p>
              </div>
              <div className={style.card_link}>
                <FcLike size="1.3rem" />
                <p>
                  Total Likes : <span>{information?.total_likes}</span>
                </p>
              </div>
            </div>
          </div>
                {
                    photoError ? 
                    <div className={style.error}>
                        <BiError /> Something Went Wrong
                    </div> 
                    :
                    <div>
                        <Photo params={params.userdetail} photos={photos} />
                    </div>
                }
        </div>
      ) : 
      (
        <ClipLoader
            className={style.loader}          
            color="#3f36d6"
            loading={true}
            size={150}
            cssOverride={loader}
            aria-label="Loading Spinner"
            data-testid="loader"
      />
      )}
            </>
        }
    </div>
  );
}
