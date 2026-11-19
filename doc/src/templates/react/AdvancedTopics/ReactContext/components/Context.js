import React, { useState, createContext, useContext } from 'react';

const Context = createContext();

export const getContext = () => useContext(Context);

export const updateVariables = (prev, updates, value, mode = 'replace') => {
  const updated = structuredClone(prev);
  // Support both single and multiple updates
  const updateList = Array.isArray(updates)?updates:[{ path: updates, value, mode }];

  updateList.forEach(({ path, value, mode = 'replace' }) => {
    const keys = path.split('.');
    let current = updated;
    // Navigate to the target object
    keys.slice(0, -1).forEach(key => { current = current[key]; });
    const lastKey = keys[keys.length - 1];
    switch (mode) {
      case 'append':
        if (Array.isArray(current[lastKey])) {
          // Existing value is an array: append elements
          current[lastKey] = [
            ...current[lastKey],
            ...(Array.isArray(value) ? value : [value])
          ];
        } else if (typeof current[lastKey] === 'string') {
          // Existing value is a string: concatenate
          current[lastKey] += String(value);
        } else if (typeof current[lastKey] === 'number') {
          // Existing value is a number: convert to string and concatenate
          current[lastKey] = String(current[lastKey]) + String(value);
        } else if (current[lastKey] === undefined || current[lastKey] === null) {
          // No existing value: assign
          current[lastKey] = value;
        } else {
          // Other data types: replace
          current[lastKey] = value;
        }
        break;

      case 'remove':
        delete current[lastKey];
        break;
      case 'replace':
      default:
        current[lastKey] = value;
        break;
    }
  });
  return updated;
};

export const ContextProvider = ({ children, variables }) => {
  const [contextData, updateContextData] = useState(variables);
  // Centralized context update function
  const setContextData = (path, value, mode = 'replace') => {
    updateContextData(prev =>
      updateVariables(prev, path, value, mode)
    );
  };
  return (<Context.Provider value={{ contextData, setContextData }}>
   {children}
  </Context.Provider>);
};