// UserContext.js
import React, { createContext, useState } from 'react';
import { useSelector } from 'react-redux';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  //const [user, setUser] = useState(null);
  const user = useSelector((state) => state.user.nickName);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};
