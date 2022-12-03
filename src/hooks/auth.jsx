import React, { createContext, useContext } from 'react';


const AuthContext = createContext([]);


function AuthProvider({ children }) {
  const user = {
    id: 1,
    name: 'John Doe',
    email: 'john@gmail.com',
  }


  return (
    <AuthContext.Provider value={{user}}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };