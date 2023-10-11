import { useState } from 'react';

const useHoverCounter = () => {
  const [count, setCount] = useState(0);

  const handleMouseOver = () => {
    setCount(count + 1);
  };

  return { count, handleMouseOver };
};

export default useHoverCounter;
