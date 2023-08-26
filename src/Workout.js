import React from "react";

const Workout = ({ workout }) => {
  return (
    <div className="w-5/6 px-4 sm:px-8 py-2 m-16 bg-gray-200 border-2 border-black rounded-2xl text-black font-mono mx-auto">
      <h3 className="text-black text-center text-base sm:text-xl pt-1 font-bold">
        {workout.name}
      </h3>
      <div className="text-xs sm:text-base">
      <p className="pt-2">
        <span className="font-bold">Type:</span>{" "}
        {workout.type.charAt(0).toUpperCase() + workout.type.slice(1)}{" "}
      </p>
      <p className="pt-2">
        <span className="font-bold">Muscle Group:</span>{" "}
        {workout.muscle.charAt(0).toUpperCase() + workout.muscle.slice(1)}{" "}
      </p>
      <p className="pt-2">
        <span className="font-bold">Equipment Needed:</span>{" "}
        {workout.equipment.charAt(0).toUpperCase() + workout.equipment.slice(1)}
      </p>
      <p className="pt-2">
        <span className="font-bold">Difficulty Level:</span>{" "}
        {workout.difficulty.charAt(0).toUpperCase() +
          workout.difficulty.slice(1)}{" "}
      </p>
      <ol className="pt-2">
        <p className="font-bold mb-1">Instructions For Exercise:</p>
        {workout.instructions.split(".").map(
          (sentence, index) =>
            sentence.trim() && (
              <li key={index}>
                {index + 1}. {sentence.trim()}
              </li>
            )
        )}
      </ol>
    </div>
    </div>
  );
};

export default Workout;
