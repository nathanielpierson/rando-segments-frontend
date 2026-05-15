import { useState, useEffect } from "react";
import axios from "axios";

export function ImageProcessorPage() {
  const [frames, setFrames] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/frames.json").then((response) => {
      setFrames(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      {frames.map((frame) => {
        return (
          <div key={frame.id}>
            <p>level: {frame.level.name}</p>
            <img src={frame.image_path} alt="" />
            <p>time: {frame.time}</p>
            <p>frame_type: {frame.frame_type}</p>
          </div>
        );
      })}
    </div>
  );
}
