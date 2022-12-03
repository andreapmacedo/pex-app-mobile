import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 

import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { OnBoarding } from '../screens/OnBoarding';
import { Login } from "../screens/Auth/Login";
import { SignUp } from "../screens/Auth/SignUp";
import { SignIn } from "../screens/Auth/SignIn";
import { TermsAndConditions } from "../screens/Auth/TermsAndConditions";
import { EnableFaceId } from "../screens/Auth/EnableFaceId";
import { Main } from "../screens/Main";
import { Product } from "../screens/Product";


const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false, 
    }}>
      <Screen 
        name="OnBoarding"
        component={OnBoarding}
      />

      <Screen 
        name="Login"
        component={Login}
        options={{
          tabBarIcon: (() => (
            <Feather name="shopping-cart" size={24} color="black" />
          ))}}
      />
      <Screen name="SignUp" component={SignUp} 
        options={{
          tabBarIcon: (() => (
            <Octicons name="apps" size={24} color="black" />
          ))}}
      
      />
      <Screen name="SignIn" component={SignIn} 
        options={{
          tabBarIcon: (() => (
            <Fontisto name="favorite" size={24} color="black" />
          ))}}
      
      />
      <Screen name="TermsAndConditions" component={TermsAndConditions} 
        options={{
          tabBarIcon: (() => (
            <FontAwesome name="user-o" size={24} color="black" />
          ))}}
      
      />
      <Screen name="EnableFaceId" component={EnableFaceId} />
      <Screen name="Main" component={Main} />
      <Screen name="Product" component={Product} />
    </Navigator>
  );
}  
