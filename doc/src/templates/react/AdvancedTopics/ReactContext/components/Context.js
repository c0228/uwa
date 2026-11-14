import React, { useState, createContext, useContext } from 'react';

const Context = createContext();

export const getContext = () => useContext(Context);

export const updateVariables = (prev, path, value, mode) => {
  const updated = structuredClone(prev);
  const keys = path.split('.');
  let current = updated;
  // Navigate to the target object
  keys.slice(0, -1).forEach(key => {
    current = current[key];
  });
  const lastKey = keys[keys.length - 1];
  switch (mode) {
    case 'append':
      current[lastKey] = [
        ...current[lastKey],
        ...(Array.isArray(value) ? value : [value])
      ];
      break;
    case 'remove':
      delete current[lastKey];
      break;
    case 'replace':
    default:
      current[lastKey] = value;
      break;
  }
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