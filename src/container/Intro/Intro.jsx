import { useState, useRef } from "react";
import "./Intro.css";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";

import { meal } from "../../constants";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const viRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prev) => !prev);
    if (playVideo) {
      viRef.current.pause();
    } else viRef.current.play();
  };

  return (
    <div className="app__video">
      <video
        src={meal}
        ref={viRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
