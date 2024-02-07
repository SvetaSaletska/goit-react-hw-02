import { useState } from 'react';
import { Feedback } from '../Feedback/Feedback';
import { Options } from '../Options/Options';
import './App.module.css';

export const App = () => {
  const [count, setCount] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <h1>Sip Happens Café</h1>
        <p>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
        <Options onUpdate={handleClick} />
        <Feedback value={count} />
      </div>
    </>
  );
};
