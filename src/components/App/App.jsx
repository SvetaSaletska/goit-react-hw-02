import { useEffect, useState } from 'react';
import { Feedback } from '../Feedback/Feedback';
import { Options } from '../Options/Options';
import { Notification } from '../Notification/Notification';
import './App.module.css';
import { Description } from '../Description/Description';

export const App = () => {
  const [count, setCount] = useState(() => {
    const savedCount = window.localStorage.getItem('saved-count');
    if (savedCount !== null) {
      return JSON.parse(savedCount);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const handleClick = option => {
    setCount({
      ...count,
      [option]: count[option] + 1,
    });
  };

  const totalFeedback = count.good + count.neutral + count.bad;

  const positivFeedback = Math.round(
    ((count.good + count.neutral) / totalFeedback) * 100,
  );

  const activeBtn = totalFeedback > 0;

  useEffect(() => {
    window.localStorage.setItem('saved-count', JSON.stringify(count));
  }, [count]);

  const reset = () =>
    setCount({
      good: 0,
      neutral: 0,
      bad: 0,
    });

  return (
    <>
      <div>
        <Description
          topic={'Sip Happens Café'}
          text={
            'Please leave your feedback about our service by selecting one of the options below.'
          }
        />
        <Options onUpdate={handleClick} reset={reset} active={activeBtn} />
        {totalFeedback > 0 ? (
          <Feedback
            value={count}
            total={totalFeedback}
            positive={positivFeedback}
          />
        ) : (
          <Notification text={'No feedback yet'} />
        )}
      </div>
    </>
  );
};
