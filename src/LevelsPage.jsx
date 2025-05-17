import axios from 'axios';
import { useState, useEffect } from "react";
import { LevelsIndex } from './LevelsIndex';

export function LevelsPage() {
  const [levels, setLevels] = useState([]);
  const handleIndex = () => {
  axios.get("http://localhost:3000/levels.json").then((response) => {
    setLevels(response.data);
    console.log(response.data);
  })
}
useEffect(handleIndex, []);
  return (
    <div>
      <p>
        LevelsPage
      </p>
        <LevelsIndex levels={levels}/>
    </div>
  )
}