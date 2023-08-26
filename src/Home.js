import React from "react";

function Home() {
  return (
    <>
      <div className="">
        <div className="flex justify-end">
          <a
            className="px-4 py-1 bg-gray-500 border-2 border-black hover:bg-black text-white m-4 font-mono rounded-lg flex"
            href="mailto:justin.ishiguro@gmail.com"
            onclick="event.preventDefault(); window.location.href = 'mailto:justin.ishiguro@gmail.com';"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <p className="pl-2">Contact Me</p>
          </a>
        </div>
        <div className="py-8">
          <div className="flex justify-center items-center">
            <div className="px-8 rounded-lg shadow-md border-2 border-black bg-gray-200">
              <h1 className="py-4 flex justify-center items-center font-mono text-lg sm:text-5xl font-bold whitespace-nowrap">
                FitGenius
                <span className="transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="pl-4"
                    height="1em"
                    viewBox="0 0 640 512"
                  >
                    <path d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z" />
                  </svg>
                </span>
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center mt-12 text-sm sm:text-base">
            <div className="w-11/12 max-w-3xl py-4 px-4 rounded-lg shadow-md border-2 border-black bg-gray-200">
              <p className="text-center font-mono">
                This website was created to design unique workouts for users
                depending on what type of exercises they want to perform
                (cardio, powerlifting, etc.), which muscle group they want to
                target, as well as the difficulty level of each exercise.
                Additionally, they can search for specific exercises by directly
                inputting a name. After submitting their choices, 10 exercises
                will be generated for them based on their inputs.
              </p>
              <br />
              <p className="text-center font-mono">
                This website also has a page to calculate how many calories you
                burned depending on the type of exercise you have performed. You
                are able to enter your weight and the duration of exercise to
                provide a more accurate result.
              </p>
              <br />
              <p className="text-center font-mono">
                Enjoy and please find my contact on the top right of the page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
