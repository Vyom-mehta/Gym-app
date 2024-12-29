import React from 'react'
import Button from './Button';

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen flex flex-col items-center justify-center px-4 ">
      <h1 className="text-4xl sm:text-6xl font-bold text-center">
        <span className="text-base sm:text-lg">IT'S TIME TO GET</span>
        <br />
        <span>
          SWOLE<span className="text-blue-400">NORMOUS</span>
        </span>
      </h1>
      <p className="mt-6 text-center text-gray-300 text-lg sm:text-xl max-w-2xl">
        I hereby acknowledge that I may become{" "}
        <span className="text-blue-500">unbelievably swolenormous</span> and
        accept all risks of becoming the local{" "}
        <span className="text-blue-500">mass monstrosity</span>, afflicted with
        severe body dysmorphia, unable to fit through doors.
      </p>
        <Button func={()=>{
             window.location.href = '#generate'
        }}  text={"Accept & Begin "} />
    </div>
  );
}

export default Hero


/* The {" "} is used to add a space between the plain text "I hereby acknowledge that I may become" and the next JSX element (<span>). 

text-base: Sets the default font size for the span to a smaller size compared to the surrounding text.
sm:text-lg: Ensures the font size is slightly larger on small screens for better responsiveness.

*/