import { NavigationContainer } from "@react-navigation/native"; 
import { AuthRoutes } from "./auth.routes";
import { TabRoutes } from "./tab.routes";
import React, { useContext } from 'react';
import AuthContext from "../context/AuthContext";

export function Routes() {
  const { authenticated } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {authenticated ? <TabRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}