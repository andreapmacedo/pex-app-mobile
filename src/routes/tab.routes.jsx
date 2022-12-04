import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 

import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

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
        name="Main"
        component={Main}
        options={{
          tabBarIcon: (() => (
            <Feather name="shopping-cart" size={24} color="black" />
          ))}}
      />
      <Screen name="Product" component={Product} 
        options={{
          tabBarIcon: (() => (
            <Octicons name="apps" size={24} color="black" />
          ))}}
      
      />
      <Screen name="main2" component={Main} 
        options={{
          tabBarIcon: (() => (
            <Fontisto name="favorite" size={24} color="black" />
          ))}}
      
      />
      <Screen name="main3" component={Main} 
        options={{
          tabBarIcon: (() => (
            <FontAwesome name="user-o" size={24} color="black" />
          ))}}
      
      />
    </Navigator>
  );
}  
