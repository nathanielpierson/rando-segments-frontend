import axios from "axios";
import { useState, useEffect } from "react";
import { RunsIndex } from "./RunsIndex";

export function RunsPage() {

  const [runs, setRuns] = useState([]);
  const handleIndex = () => {
  axios.get("http://localhost:3000/runs.json").then((response) => {
    setRuns(response.data);
    console.log(response.data);
  })
}
useEffect(handleIndex,[]);
  return(
    <div>
      <p>runs page</p>
      <RunsIndex runs={runs}/>
    </div>
  )
}