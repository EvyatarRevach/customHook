const useLocalStorage = (key: string) => {

    const addItem = (item: string) => {
      const existingItems = localStorage.getItem(key);
      const items = existingItems ? JSON.parse(existingItems) : [];
      if (!items.includes(item)) {
        items.push(item);
        localStorage.setItem(key, JSON.stringify(items));
      }
    };
  
    const removeItem = (item: string) => {
      const existingItems = localStorage.getItem(key);
      if (existingItems) {
        const items = JSON.parse(existingItems);
        const index = items.indexOf(item);
        if (index !== -1) {
          items.splice(index, 1);
          localStorage.setItem(key, JSON.stringify(items));
        }
      }
    };
  
    const getItem = (): string | null => {
        const existingItems = localStorage.getItem(key);
        return existingItems ? JSON.parse(existingItems)[0] : null;
      };
      
  
    return { addItem, removeItem, getItem };
  };
  
  export default useLocalStorage;
  