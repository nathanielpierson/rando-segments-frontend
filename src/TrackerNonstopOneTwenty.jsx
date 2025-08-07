import axios from 'axios';
import { useState, useEffect } from "react";

export function TrackerNonstopOneTwenty() {
  const [levels, setLevels] = useState([]);
  const [extras, setExtras] = useState(false); // useState instead of var

  const trackerIndex = () => {
    axios.get("http://localhost:3000/levels.json").then((response) => {
      const sorted = response.data.toSorted((a, b) => a.official_course_number - b.official_course_number);
      setLevels(sorted);
    });
  };

  useEffect(() => {
    trackerIndex();
  }, []);

  const toggleExtras = () => {
    setExtras(!extras); // flip and trigger re-render
    console.log(!extras);
  };

  return (
    <div className="flex flex-wrap gap-4 p-4">

      {levels.map((level) => (
        <div key={level.id} className="flex flex-col items-left w-24">
          {extras || !level.extra ? (
            <div>
              <img
                src={level.image_url}
                alt={level.name}
                className="w-full h-auto mb-2 rounded"
              />
              <div className="flex items-left mb-2">
                <input
                  id={`checkbox-1-${level.id}`}
                  type="checkbox"
                  className="w-4 h-4 text-blue-400 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
                />
                <label
                  htmlFor={`checkbox-1-${level.id}`}
                  className="ms-2 text-sm font-medium text-gray-900"
                >
                  Into warp
                </label>
              </div>

              <div>
                <input
                  id={`checkbox-2-${level.id}`}
                  type="checkbox"
                  className="w-4 h-4 text-blue-400 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
                />
                <label
                  htmlFor={`checkbox-2-${level.id}`}
                  className="ms-2 text-sm font-medium text-gray-900"
                >
                  Visited lvl
                </label>
              </div>
            </div>
          ) : null}
        </div>
      ))}
      <button
        type="button"
        onClick={toggleExtras}
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >
        {extras ? "No Castle/BitS" : "With Castle/BitS"}
      </button>
    </div>
  );
}
