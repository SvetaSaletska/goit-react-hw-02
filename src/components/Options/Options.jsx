export const Options = ({ onUpdate, setCount, isHidden }) => {
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
      {isHidden && <button onClick={() => setCount(0)}>Reset</button>}
    </div>
  );
};
