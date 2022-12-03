import { NavigationContainer } from "@react-navigation/native"; 
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { TabRoutes } from "./tab.routes";
// import { useAuth } from "../hooks/auth";
import React, { useContext } from 'react';
import AuthContext from "../context/AuthContext";

export function Routes() {
  const { authenticated } = useContext(AuthContext);
  console.log(authenticated);

  return (
    <NavigationContainer>
      {authenticated ? <TabRoutes /> : <AuthRoutes />}
      {/* <AuthRoutes /> */}
    </NavigationContainer>
  );
}