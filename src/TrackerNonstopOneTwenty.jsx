import axios from 'axios';
import { useState, useEffect } from "react";

export function TrackerNonstopOneTwenty() {
  const [levels, setLevels] = useState([]);

  const trackerIndex = () => {
    axios.get("http://localhost:3000/levels.json").then((response) => {
      setLevels(response.data);
    });
  };
  const sortedLevels = levels.toSorted((a, b) => a.official_course_number - b.official_course_number);
  useEffect(trackerIndex, []);

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {sortedLevels.map((level) => (
        <div key={level.id} className="flex flex-col items-left w-24">
          <img
            src={level.image_url}
            alt={level.name}
            className="w-full h-auto mb-2 rounded"
          />
          <div className="flex items-left mb-2">
            {/* checkbox 1...remember that the checkbox and text need to be nested in the same div to be on the same line! */}
            <input
              id={`checkbox-${level.id}`}
              type="checkbox"
              className="w-4 h-4 text-blue-400 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
            />
            <label
              htmlFor={`checkbox-${level.id}`}
              className="ms-2 text-sm font-medium text-gray-900">
              Into warp
            </label>
          </div>
          {/* Add another checkbox here if needed */}
          {/* checkbox 2 */}
          <div>
            <input
              id={`checkbox-${level.id}`}
              type="checkbox"
              className="w-4 h-4 text-blue-400 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
              />
            <label
              htmlFor={`checkbox-${level.id}`}
              className="ms-2 text-sm font-medium text-gray-900">
              Visited lvl
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}
