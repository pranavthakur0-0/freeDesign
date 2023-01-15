
import video from "../video/landing.mp4";
import { useRef, useEffect } from "react";
const Video = () => {
  const vidRef = useRef();
  useEffect(() => {
    vidRef.current.play();
  }, []);

  return (
    <video 
    width="100%"
  src={video}
  ref={ vidRef }
  muted
  autoPlay
  loop 
    />

  );
};

export default Video;
