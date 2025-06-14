export function LevelsIndex( {levels} ) {
  console.log(levels);
  console.log("in LevelsIndex")
  function handleClick() {
    console.log("handleClick run")
  }
  return (
    <div>
      <h1>All Levels ({levels.length} total)</h1>
      <button
      onClick={handleClick}
      className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
    >
      Update All
    </button>
      {levels.map((level) => (
        <div key={level.id}>
          <h3>{level.name}</h3>
          <img src={level.image_url || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuX96Zx4GsEJeHhzhhs1jEG6XPuCF4LoxugA&s"}
          style={{ height: "300px", width: "420px" }}
          className="hover:opacity-70 transition-opacity duration-300"
          alt={level.name} />
          {/* ternary operators are on this to add 0s if seconds or milliseconds are single digit */}
          <p>fastest time: {level.fastest_time_min}:{level.fastest_time_sec < 10 ? "0" + level.fastest_time_sec : level.fastest_time_sec}.{level.fastest_time_milli < 10 ? "0" + level.fastest_time_milli : level.fastest_time_milli}</p>
          </div>
      ))}
    </div>
  )
}