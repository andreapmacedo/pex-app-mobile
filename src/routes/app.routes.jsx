import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { OnBoarding } from '../screens/OnBoarding';

import { Login } from "../screens/Auth/Login";
import { SignUp } from "../screens/Auth/SignUp";
import { SignIn } from "../screens/Auth/SignIn";
import { TermsAndConditions } from "../screens/Auth/TermsAndConditions";
import { EnableFaceId } from "../screens/Auth/EnableFaceId";
import { Main } from "../screens/Main";
import { Product } from "../screens/Product";


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name="OnBoarding"
        component={OnBoarding}
      />

      <Screen name="Login" component={Login} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="TermsAndConditions" component={TermsAndConditions} />
      <Screen name="EnableFaceId" component={EnableFaceId} />
      <Screen name="Main" component={Main} />
      <Screen name="Product" component={Product} />

    </Navigator>
  );
}

