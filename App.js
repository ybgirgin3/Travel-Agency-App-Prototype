import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./components/StackNavigator";

const Tab = createBottomTabNavigator();

// multiple stack: https://medium.com/swlh/react-native-screens-using-state-20825ba5cce2

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
      <StatusBar barStyle="light-content" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
