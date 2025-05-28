import axios from 'axios';
import { useState, useEffect } from "react";

export function TrackerBasic() {
  const [levels, setLevels] = useState([]);

  const trackerIndex = () => {
    axios.get("http://localhost:3000/levels.json").then((response) => {
      setLevels(response.data);
    });
  };

  useEffect(trackerIndex, []);

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {levels.map((level) => (
        <div key={level.id} className="flex flex-col items-center w-24">
          <img
            src={level.official_image_url}
            alt={level.name}
            className="w-full h-auto mb-2 rounded"
          />
          <div className="flex items-center mb-2">
            <input
              id={`checkbox-${level.id}`}
              type="checkbox"
              className="w-4 h-4 text-blue-400 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
            />
            <label
              htmlFor={`checkbox-${level.id}`}
              className="ms-2 text-sm font-medium text-gray-900"
            >
              E
            </label>
          </div>
          {/* Add another checkbox here if needed */}
                      <input
              id={`checkbox-${level.id}`}
              type="checkbox"
              className="w-4 h-4 text-blue-400 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
            />
                      <label
              htmlFor={`checkbox-${level.id}`}
              className="ms-2 text-sm font-medium text-gray-900"
            >
              V
            </label>
        </div>
      ))}
    </div>
  );
}
