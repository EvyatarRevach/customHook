import useHoverCounter from './useHoverCounter';

const MouseHoverCounter = () => {
  const { count , handleMouseOver } = useHoverCounter();

  return (
    <div style={{ border: '1px solid black', padding: '10px', marginTop: '20px' } } 
    onMouseOver={handleMouseOver}>
      <h3>Hover Count: {count}</h3>
    </div>
  );
};

export default MouseHoverCounter;
