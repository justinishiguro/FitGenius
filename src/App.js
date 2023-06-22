import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./Pages/Home";
import Workouts from "./Pages/Workouts";
import Calories from "./Pages/Calories";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="bg-gradient-to-t from-gray-300 via-neutral-400 to-gray-300 min-h-screen">

      <QueryClientProvider client={queryClient}>
        <Router>
          <nav className="relative flex flex-wrap items-center justify-between bg-gray-500 text-white font-mono">
            <a
              className="flex-auto flex items-center justify-center border-white border-r border-b shadow-offset shadow-md shadow-opacity hover:bg-black py-4"
              href="/"
            >
              Home
            </a>

            <a
              className="flex-auto flex items-center justify-center border-white border-r border-b shadow-offset shadow-md shadow-opacity hover:bg-black py-4"
              href="/workouts"
            >
              Create A Workout
            </a>

            <a
              className="flex-auto flex items-center justify-center border-white border-b shadow-offset shadow-md shadow-opacity hover:bg-black py-4"
              href="/calories"
            >
              Calories Burned
            </a>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/calories" element={<Calories />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
