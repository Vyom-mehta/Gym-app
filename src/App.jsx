import { useState,useEffect } from 'react'
import Hero from './components/Hero.jsx'
import Workout from './components/Workout.jsx'
import Generator from './components/Generator.jsx'
import generateWorkout from './utils/functions.js';




function App() {
  const [poison, setPoison] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState("strength_power");

  const [workout, setWorkout] = useState(null);

  function updateWorkout() {
    if (muscles.length < 1) {
      return;
    }

    let new_workout = generateWorkout({ poison, muscles, goal });

    setWorkout(new_workout);
    
    // original
    //  window.location.href ='#workout'
  }

  //GPT Useeffect !!!>>>  Smoothly scroll to the workout section after it renders
  useEffect(() => {
    if (workout) {
      const workoutSection = document.getElementById("workout");
      if (workoutSection) {
        workoutSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [workout]); // Runs every time `workout` changes

  return (
    <>
      <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
        <Hero />
        <Generator
          poison={poison}
          setPoison={setPoison}
          muscles={muscles}
          setMuscles={setMuscles}
          goal={goal}
          setGoal={setGoal}
          updateWorkout={updateWorkout}
        />

        {workout && <Workout workout={workout} />}
      </main>
    </>
  );
}

export default App
