import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { OnBoarding } from '../screens/OnBoarding';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name="OnBoarding"
        component={OnBoarding}
      />
    </Navigator>
  );
}

