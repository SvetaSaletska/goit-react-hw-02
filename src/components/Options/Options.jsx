export const Options = ({ onUpdate, reset, active }) => {
  return (
    <div>
      <button onClick={() => onUpdate('good')} name="good">
        Good
      </button>
      <button onClick={() => onUpdate('neutral')} name="neutral">
        Neutral
      </button>
      <button onClick={() => onUpdate('bad')} name="bad">
        Bad
      </button>
      {active && <button onClick={reset}>Reset</button>}
    </div>
  );
};
