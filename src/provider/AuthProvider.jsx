import React, { useState, useMemo } from 'react';
// import PropTypes from 'prop-types';
import AuthContext from '../context/AuthContext';

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const user = {
    id: 1,
    email: 'pedro@gmail.com',
    password: 123,
  }

  // const value = useMemo(() => ({
  //   user,
  //   authenticated,
  //   setAuthenticated,
  // }), [user, authenticated]);

  const value = {
    user,
    authenticated,
    setAuthenticated,
  };

  return (
    <AuthContext.Provider value={ value }>
      {children}
    </AuthContext.Provider>
  );
}

// AuthProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default AuthProvider;
