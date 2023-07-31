/* eslint-disable @next/next/no-img-element */
import React from "react";
// import Utahime from "../../../public/Images/utahime.png"
import Image from "next/image";
import style from "../CSS/card.module.css";
import { AiFillCalendar } from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { BsFillShareFill } from "react-icons/bs";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { BiLogoTwitter } from "react-icons/bi";
import { BiWorld } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { BsFillCaretRightFill } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import { TbPigMoney } from "react-icons/tb";
import { MdCollections } from "react-icons/md";
import { LiaChessKingSolid } from "react-icons/lia";
import { BiTimeFive } from "react-icons/bi";
import "../../app/globals.css";

import Link from "next/link";

export const Card = ({ item }) => {
  let date = new Date(item?.user?.updated_at);
  let formattedDate = date.toLocaleDateString("en-US");

  return (
    <div className={style.card}>
      <div className={style.card_image_info}>
        <div className={style.card_info}>
          <div className={style.card_info_one}>
            <div className={style.card_name_date}>
              <div className={style.mobile_user_location}>
                <div className={style.card_name}>
                  {/* <BiSolidUserCircle style={{color: "grey"}} size="1.3rem" /> */}
                  <img src={item?.user?.profile_image?.small} alt="profile" />
                </div>
                <div className={style.username_location}>
                  <Link
                    href={`/User/${item?.user?.username}`}
                    className={style.username}
                  >
                    <p style={{ textTransform: "capitalize" }}>
                      {item?.user.username}
                    </p>
                  </Link>
                  <div className={style.card_location}>
                    <p>{item?.user.location}</p>
                  </div>
                </div>
              </div>

              <div className={style.card_date_time}>
                <div className={style.card_date}>
                  <AiFillCalendar size="1rem" />
                  <p>{formattedDate}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.card_info_two}>
            <div className={style.user_bio}>
              <BsBook size="1rem" />
              <p>{item?.user.bio ? item?.user?.bio : "You don't have a bio"}</p>
            </div>
          </div>
          <div className={style.card_link_right}>
            <Link
              href={{
                pathname: "https://twitter.com/" + item?.user?.twitter_username,
              }}
              className={style.card_link_right_icon}
            >
              <BiLogoTwitter size="1.3rem" />
            </Link>
            <Link
              href={{
                pathname:
                  "https://instagram.com/" + item?.user?.instagram_username,
              }}
              className={style.card_link_right_icon}
            >
              <BsInstagram size="1.3rem" />
            </Link>
            <Link
              href={{
                pathname: item?.user?.portfolio_url,
              }}
              className={style.card_link_right_icon}
            >
              <BiWorld size="1.3rem" />
            </Link>
          </div>
          <div className={style.card_link}>
            <div className={style.card_link_left}>
              <div className={style.card_link_left_icon}>
                <AiFillLike size="1.2rem" />
                <p>
                  {item?.user.total_likes !== 0 ? item?.user.total_likes : 0}
                </p>
              </div>
              <div className={style.card_link_left_icon}>
                <BiCommentDetail size="1.2rem" />
                <p>36</p>
              </div>
              <div className={style.card_link_left_icon}>
                <BsFillShareFill size="1.2rem" />
                <p>23</p>
              </div>
              <div className={style.card_link_left_icon}>
                <MdPhotoSizeSelectActual size="1.2rem" />
                <p>{item?.user.total_photos}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.card_image}>
          <Image
            className={style.card_image}
            src={item?.urls?.regular}
            alt="loading"
            width={350}
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

