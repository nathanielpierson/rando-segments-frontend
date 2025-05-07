import axios from "axios";
import { useState, UseEffect } from "react";

export function RunsIndex( {runs} ) {
  const sortedRuns = runs.toSorted((a, b) => a.id - b.id);
return(
  <div>
    <p>runs index</p>
    {sortedRuns.map((run) => (
<div key={run.id}>
  <p>level {run.level.name}</p>
  <p>time {run.minutes}:{run.seconds > 9 ? run.seconds : "0" + run.seconds}.{run.milliseconds}</p>
</div>
))}
  </div>
)
}