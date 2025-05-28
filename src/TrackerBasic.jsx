import axios from 'axios';
import {useState, useEffect} from "react";

export function TrackerBasic() {
const [levels, setLevels] = useState([]);
const trackerIndex = () => {
  axios.get("http://localhost:3000/levels.json").then((response) => {
  setLevels(response.data);
})}
useEffect(trackerIndex, ([]));
  return (
    <div>
      {levels.map((level) => (
        <div key={level.id}>
          <img src={level.official_image_url} height="50" width="50" />
        </div>
      )
      )}
    </div>
  )
}