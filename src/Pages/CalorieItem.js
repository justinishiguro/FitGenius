import React from "react";

const CalorieItem = ({ calorie }) => {
  return (
    <div className="px-8 py-2 m-16 bg-gray-200 border-2 border-black rounded-2xl text-black font-mono">
      <div>
        <p className="inline font-bold">Activity: </p>
        <h3 className="inline">{calorie.name}</h3>
      </div>
      <p className="pt-2">You burned {calorie.total_calories} calories in {calorie.duration_minutes} minutes.</p>
      <p className="pt-2">You would burn {calorie.calories_per_hour} calories per hour.</p>
    </div>
  );
};

export default CalorieItem;
