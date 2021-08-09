import React from "react";
import { useState } from "react";

export interface HookProps {
  name: string;
  display: string;
  startNum: number;
}

export const Hook2 = ({ name, display, startNum }: HookProps) => {
  const [count, setCount] = useLocalStorage(name, startNum);
  return (
    <div>
      <p>
        {count}
        &nbsp;{display}
      </p>
      <button onClick={() => setCount(count + 1)}>{name}</button>
    </div>
  );
};

function useLocalStorage(key: string, initialValue: number) {
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that persists the new value to localStorage.
  const setValue = (value: any) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}
