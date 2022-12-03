import { NavigationContainer } from "@react-navigation/native"; 
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { TabRoutes } from "./tab.routes";

export function Routes() {
  return (
    <NavigationContainer>
      {/* <AppRoutes /> */}
      <TabRoutes />
      {/* <AuthRoutes /> */}
    </NavigationContainer>
  );
}