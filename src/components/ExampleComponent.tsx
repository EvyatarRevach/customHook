import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const ExampleComponent: React.FC = () => {
  const storageKey = 'myKey';
  const { addItem, removeItem, getItem } = useLocalStorage(storageKey);
  const [inputValue, setInputValue] = useState<string>('');
  const [checkValue, setCheckValue] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);

  const handleAddItem = () => {
    if (inputValue) {
      addItem(inputValue);
      setInputValue('');
    }
  };

  const handleRemoveItem = () => {
    const item = getItem();
    if (item === checkValue && item !== null) {
      removeItem(item);
      setMessage(`The item ${checkValue} has been removed from the data store`);
    } else {
      setMessage(`The item ${checkValue} is not present in the data store`);
    }
  };
  

  const handleCheckItem = () => {
    const item = getItem();
    if (item === checkValue) {
      setMessage(`The item ${checkValue} is present in the data store`);
    } else {
      setMessage(`The item ${checkValue} is not present in the data store`);
    }
  };

  return (
    <div>
        <h2>Use Local Storage</h2>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="Enter a new item"
      />
      <button onClick={handleAddItem}>Add Item</button>
      <br />
      <input
        type="text"
        value={checkValue}
        onChange={e => setCheckValue(e.target.value)}
        placeholder="Check if the item exists"
      />
      <button onClick={handleRemoveItem}>Remove Item</button>
      <button onClick={handleCheckItem}>Check Item</button>
      <div>{message}</div>
    </div>
  );
};

export default ExampleComponent;
