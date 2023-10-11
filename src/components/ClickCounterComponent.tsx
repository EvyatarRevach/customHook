import useClickCounter from './useClickCounter';

const ClickCounterComponent = () => {
  const { count: blueCount, increment: incrementBlue } = useClickCounter();
  const { count: greenCount, increment: incrementGreen } = useClickCounter();

  return (
    <div>
      <button onClick={incrementBlue} style={{ backgroundColor: 'blue', color: 'white' }}>
        Click Me (Blue)
      </button>
      <button onClick={incrementGreen} style={{ backgroundColor: 'green', color: 'white' }}>
        Click Me (Green)
      </button>
      <div>
        <p>Clicks on Blue Button: {blueCount}</p>
        <p>Clicks on Green Button: {greenCount}</p>
      </div>
    </div>
  );
};

export default ClickCounterComponent;
