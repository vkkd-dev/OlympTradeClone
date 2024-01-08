import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [ coinId, setCoinId ] = useState('bitcoin');

  return (
    <MyContext.Provider value={{ coinId, setCoinId }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
