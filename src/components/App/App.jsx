import { useState } from 'react';
import { Feedback } from '../Feedback/Feedback';
import { Options } from '../Options/Options';
import { Notification } from '../Notification/Notification';
import './App.module.css';

export const App = () => {
  const [count, setCount] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClick = option => {
    setCount({
      ...count,
      [option]: count[option] + 1,
    });
  };

  const totalFeedback = count.good + count.neutral + count.bad;

  const isHidden = totalFeedback > 0;

  return (
    <>
      <div>
        <h1>Sip Happens Café</h1>
        <p>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
        <Options
          onUpdate={handleClick}
          setCount={setCount}
          isHidden={isHidden}
        />
        {totalFeedback > 0 ? (
          <Feedback value={count} />
        ) : (
          <Notification text={'No feedback yet'} />
        )}

        {/* <Feedback value={count} /> */}
      </div>
    </>
  );
};
