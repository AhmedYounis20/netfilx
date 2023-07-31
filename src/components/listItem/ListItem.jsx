import React, { useState } from "react";
import "./listItem.scss";
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      className="listItem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://movies.universalpictures.com/media/fstx-montage1sheet2-rgb-1-64108e93e63dd-1.jpg"
        alt="movie"
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop  />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon"/>
              <Add className="icon"/>
              <ThumbUpAltOutlined className="icon"/>
              <ThumbDownAltOutlined className="icon"/>
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>2023</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              nostrum perspiciatis libero assumenda delectus.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
