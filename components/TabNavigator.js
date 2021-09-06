import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../assets/colors/colors";
import LikedScreen from "../Screens/LikedScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../Screens/HomeScreen";
import { StackNavigator } from "./StackNavigator";

{
  /* <Stack.Screen
name="TabNavigator"
component={TabNavigator}
options={{headerShown: false}}
/> */
}

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styles.tabBar,
        activeTintColor: colors.orange,
        inactiveTintColor: colors.gray,
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={32} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Liked"
        component={LikedScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="heart" size={32} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={32} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
