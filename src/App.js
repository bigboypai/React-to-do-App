import { useState } from 'react';
import React from 'react';
import './app.css';

export default function App() {
  let [todo, setTodo] = useState([]);

  // With the following function I set "todo" to a new array element

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className='parent-container'>
      <div className='input-container'>
        <input onChange={handleChange} type='text' />
        <button className='add-btn'> + </button>
      </div>
      <div className='todos-container'>
        <ul></ul>
      </div>
    </div>
  );
}
