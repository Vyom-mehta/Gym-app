import React from 'react'

const Button = (props) => {
    const {text,func} = props
  return (
    <button onClick={func} 
    className="mt-8   text-white px-6 py-3 rounded-lg text-lg shadow-lg blueshadow border-[2px] border-blue-100 border-solid bg-slate-950 duration-200 mx-auto  ">
     <p>{text}</p>
    </button>
  );
}

export default Button