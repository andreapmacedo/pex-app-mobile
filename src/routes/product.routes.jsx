import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { Product } from "../screens/Product";

const { Navigator, Screen } = createNativeStackNavigator();

export function ProductRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Product" component={Product} />
    </Navigator>
  );
}