import React from "react";
import "./featured.scss";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
const Featured = ({type}) => {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type==="movie" ? "Movies":"Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventrue">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="animation">Animation</option>
                    <option value="darama">Darama</option>
                </select>
            </div>
        )}
      <img
        src="https://c8.alamy.com/comp/2K4TMJ5/the-matrix-1999-the-matrix-movie-poster-keanu-reeves-2K4TMJ5.jpg"
        alt="profile"
        width={"100%"}
      />
      <div className="info">
        <img src="https://www.pngarts.com/files/9/Matrix-Logo-Transparent-Image.png"  alt="featured" />
        <span className="desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum nisi
          repudiandae quos! Amet deserunt molestias quo provident repellat
          dignissimos, perspiciatis perferendis. Nulla accusantium distinctio
          modi aliquid quasi facilis dolor quibusdam!
        </span>
        <div className="buttons">
            <button className="play">< PlayArrow/> <span>play</span></button>
            <button className="more"><InfoOutlined/> <span>more</span></button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
