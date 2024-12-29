import React from 'react'
import Section_wrapper from './Section_wrapper.jsx'
import ExerciseCard from './ExerciseCard.jsx';
 

const Workout = (props) => {
  const {workout} = props;
  return (

     <Section_wrapper id={'workout'}
      header={"Welcome to"}
      title={["The", "Danger", "Zone"]}
    >
        
        <div className='flex flex-col gap-4'>
                 {workout.map((exercise,idx) => {
                     return(
                        <ExerciseCard exercise = {exercise} idx={idx} key={idx}></ExerciseCard>
                     )
                 })}
        </div>

    </Section_wrapper>
  )
}

export default Workout