import React, { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext();

export const getAppContext = () => useContext(AppContext);

export const ContextProvider = ({ children, variables }) => {
 const [contextData, updateContextData] = useState(variables);
 const setContextData = (data) => {
  updateContextData({ ...contextData, ...data });
 };
 return (
  <AppContext.Provider value={{ contextData, setContextData }}>
   {children}
  </AppContext.Provider>
 );
};

ContextProvider.propTypes = {
 children: PropTypes.node.isRequired,
 variables: PropTypes.object.isRequired,
};
