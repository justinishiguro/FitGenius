import React, { useState, useEffect } from "react";
import Workout from "./Workout";

const WorkoutForm = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [muscle, setMuscle] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [workouts, setWorkouts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [show, setShow] = useState(true);
  const [fetchedOnce, setFetchOnce] = useState(false);

  const fetchWorkouts = async () => {
    setIsLoading(true);

    const apiKey = process.env.REACT_APP_API_KEY;

    let url = "https://api.api-ninjas.com/v1/exercises?";

    if (name) {
      url += `name=${name}&`;
    }
    if (type) {
      url += `type=${type}&`;
    }
    if (muscle) {
      url += `muscle=${muscle}&`;
    }
    if (difficulty) {
      url += `difficulty=${difficulty}&`;
    }

    try {
      const res = await fetch(url, {
        headers: {
          "X-Api-Key": apiKey,
        },
      });

      if (res.ok) {
        const data = await res.json();
        setWorkouts(data);
      } else {
        throw new Error("Error fetching workouts");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleMuscleChange = (e) => {
    setMuscle(e.target.value);
  };

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWorkouts();
    setShow(!show);
    setFetchOnce(true);
  };

  function handleClick() {
    setShow(!show);
  }

  return show ? (
    <>
      <div className="flex justify-end">
        <button
          className="border-2 border-black sm:text-base text-xs sm:px-8 px-4 py-2 bg-gray-500 hover:bg-black text-white m-4 font-mono rounded-lg"
          onClick={handleClick}
        >
          Back To Workout
        </button>
      </div>

      <div className="flex justify-center items-center fixed bottom-1/6 left-0 right-0 h-5/6">
        <div className="w-5/6 max-w-lg py-4 sm:px-32 px-16 rounded-lg shadow-md border-2 border-black bg-gray-200">
          <h1 className="flex justify-center items-center font-mono text-md sm:text-2xl font-bold pb-4 whitespace-nowrap underline">
            Create A Workout Below!
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center font-mono text-sm sm:text-base"
          >
            <label htmlFor="name-select" className="mb-1 whitespace-nowrap">
              Name (Optional):
            </label>
            <input
              type="text"
              id="name-input"
              value={name}
              onChange={handleNameChange}
              className="border-2 mb-2 rounded-xl px-2 border-black bg-gray-500 text-white"
            />

            <label htmlFor="type-select" className="mb-1 whitespace-nowrap">
              Type (Optional):
            </label>
            <select
              id="type-select"
              value={type}
              onChange={handleTypeChange}
              className="mb-2 border-2 rounded-xl px-2 border-black bg-gray-500 text-white"
            >
              <option value="">All</option>
              <option value="cardio">Cardio</option>
              <option value="powerlifting">Powerlifting</option>
              <option value="strength">Strength</option>
              <option value="stretching">Stretching</option>
              <option value="strongman">Strongman</option>
              <option value="plyometrics">Plyometrics</option>
              <option value="olympic_weightlifting">
                Olympic Weightlifting
              </option>
            </select>

            <label htmlFor="muscle-select" className="mb-1 whitespace-nowrap">
              Muscle (Optional):
            </label>
            <select
              id="muscle-select"
              value={muscle}
              onChange={handleMuscleChange}
              className="mb-2 border-2 rounded-xl px-2 border-black bg-gray-500 text-white"
            >
              <option value="">All</option>
              <option value="chest">Chest</option>
              <option value="biceps">Biceps</option>
              <option value="lats">Lats</option>
              <option value="abdominals">Abdominals</option>
              <option value="abductors">Abductors</option>
              <option value="adductors">Adductors</option>
              <option value="calves">Calves</option>
              <option value="forearms">Forearms</option>
              <option value="glutes">Glutes</option>
              <option value="hamstrings">Hamstrings</option>
              <option value="lower_back">Lower Back</option>
              <option value="middle_back">Middle Back</option>
              <option value="neck">Neck</option>
              <option value="quadriceps">Quadriceps</option>
              <option value="traps">Traps</option>
              <option value="triceps">Triceps</option>
            </select>

            <label
              htmlFor="difficulty-select"
              className="mb-1 whitespace-nowrap"
            >
              Difficulty (Optional):
            </label>
            <select
              id="difficulty-select"
              value={difficulty}
              onChange={handleDifficultyChange}
              className="mb-2 border-2 rounded-xl px-2 border-black bg-gray-500 text-white"
            >
              <option value="">All</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="expert">Expert</option>
            </select>

            {/* <button
              type="submit"
              className="my-4 hover:bg-black border-2 border-black bg-gray-700 text-white px-8 py-4 my-2 rounded-xl "
            >
              Fetch Workout
            </button> */}
            <button
              type="submit"
              className="my-4 mb-2 border-2 border-black bg-gray-500 text-white px-8 py-4 my-2 rounded-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-lg hover:bg-gray-800"
            >
              Fetch Workout
            </button>
          </form>
        </div>
      </div>
    </>
  ) : isLoading ? (
    <div className="flex justify-center items-center fixed bottom-1/6 left-0 right-0 h-5/6">
      <div role="status" className="">
        <svg
          aria-hidden="true"
          className="w-48 h-48 text-gray-200 animate-spin dark:text-gray-600 fill-black"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  ) : workouts.length === 0 ? (
    <>
      <div className="flex justify-end">
        <button
          className="border-2 border-black sm:text-base text-xs sm:px-8 px-4 py-2 bg-gray-500 hover:bg-black text-white m-4 font-mono rounded-lg"
          onClick={handleClick}
        >
          New Workout
        </button>
      </div>
      {fetchedOnce === true && (
        <div className="flex justify-center items-center fixed bottom-1/6 left-0 right-0 h-5/6">
          <div className="w-full max-w-lg py-4 px-4 rounded-lg shadow-md border-2 border-black bg-gray-200">
            <h1 className="flex justify-center items-center font-mono text-lg sm:text-2xl font-bold whitespace-nowrap pb-2">
              Error!
            </h1>
            <p className="text-center">
              No exercises were found with your selections. Please try again.
            </p>
          </div>
        </div>
      )}
    </>
  ) : (
    <>
      <div className="pb-4 bg-gradient-to-t from-gray-300 via-neutral-400 to-gray-300">
        <div className="flex justify-end font-mono">
          <button
            className="border-2 border-black sm:text-base text-xs sm:px-8 px-4 py-2 m-4 rounded-lg bg-gray-500 hover:bg-black text-white"
            onClick={handleClick}
          >
            New Workout
          </button>
        </div>
        <h1 className="text-center font-bold text-xl px-4 sm:px-0 sm:text-4xl pt-8">
          Here is your generated workout based on your choices. Enjoy!
        </h1>
        {workouts.length > 0 && (
          <div>
            {workouts.map((workout) => (
              <Workout key={workout.name} workout={workout} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default WorkoutForm;
