import { useEffect, useState } from 'react';
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

  // const [count, setCount] = useState(() => {
  //   const savedCount = window.localStorage.getItem('saved-count');
  //   if (savedCount !== null) {
  //     return savedCount;
  //   }
  //   return {
  //     good: 0,
  //     neutral: 0,
  //     bad: 0,
  //   };
  // });

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

  const isHidden = totalFeedback > 0;

  useEffect(() => {
    window.localStorage.setItem('saved-count', JSON.stringify({ count }));
  }, [count]);

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
          <Feedback
            value={count}
            total={totalFeedback}
            positive={positivFeedback}
          />
        ) : (
          <Notification text={'No feedback yet'} />
        )}

        {/* <Feedback value={count} /> */}
      </div>
    </>
  );
};
