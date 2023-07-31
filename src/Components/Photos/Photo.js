/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import style from "../CSS/photos.module.css";
import { FcLike } from "react-icons/fc";
import { BiCommentDetail } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import { ImDownload3 } from "react-icons/im";
import { BsFillGridFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import Link from "next/link";


export const Photo = ({ params , photos }) => {
  const [grid, setGrid] = useState(true);
  console.log(photos);

  const handleGrid = () => {
    setGrid(false);
  };
  const handleList = () => {
    setGrid(true);
  };

  return (
    <div className={style.all_post_image}>
      <div className={style.change_view_button}>
          <BsFillGridFill className={style.button} onClick={handleList} /> | {" "} 
          <FaThList className={style.button} onClick={handleGrid} /> 
      </div>
      {photos.length !== 0 ? (
        <div className={style.photos}>
          {photos?.map((item) => {
            return (
              <>
                {grid ? (
                  <div key={item.id} className={style.post}>
                    <div className={style.user_photos}>
                      <div className={style.post_image}>
                        <img src={item?.urls?.regular} alt="photos" />
                      </div>
                    </div>
                    <div className={style.photos_likes_share}>
                      <div className={style.card_link}>
                        <div className={style.card_link_icon_comment}>
                          <div className={style.card_link_icon}>
                            <FcLike size="1.4rem" />
                            <p>{item?.likes}</p>
                          </div>
                          <div className={style.card_link_icon}>
                            <BiCommentDetail className={style.toggle_color} size="1.4rem" />
                          </div>
                        </div>
                        <div className={style.card_link_icon_down_share}>
                          <Link
                            href={{
                              pathname: `${item?.links?.html}`,
                            }}
                            target="_blank"
                            className={style.card_link_icon_link}
                          >
                            <ImDownload3 size="1.4rem" />
                          </Link>
                          <div className={style.card_link_icon}>
                            <FaShare className={style.toggle_color} size="1.4rem" />
                          </div>
                        </div>
                      </div>
                      {item?.description && (
                        <div className={style.post_description}>
                          <p>{item?.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className={style.list_card}>
                    <div className={style.post_image_desc}>
                      <div className={style.list_card_image_info}>
                        <img
                          className={style.card_image}
                          src={item?.urls?.regular}
                          alt="Utahime"
                        />
                      </div>
                      {item?.description && (
                        <div className={style.list_post_description}>
                          <p>{item?.description}</p>
                        </div>
                      )}
                    </div>
                    <div className={style.list_card_link}>
                        <div className={style.card_link_left_icon}>
                            <FcLike size="1.2rem" />
                            <p className={style.toggle_color}>
                            {item?.user.total_likes !== 0
                            ? item?.user.total_likes
                            : 0}
                            </p>
                        </div>
                        <div className={style.card_link_left_icon}>
                            <BiCommentDetail className={style.toggle_color} size="1.2rem" />
                            <p className={style.toggle_color}>36</p>
                        </div>
                        <Link
                        href={{
                            pathname: `${item?.links?.html}`,
                        }}
                        target="_blank"
                        className={style.card_link_icon_link}
                        >
                        <ImDownload3 size="1.4rem" />
                        </Link>
                        <div>
                        <FaShare className={style.toggle_color} size="1.2rem" />
                        </div>
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
      ) : (
        <div>No uploaded photos</div>
      )}
    </div>
  );
};
