import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DetailScreen from './Screens/DetailScreen';
import HomeScreen from './Screens/HomeScreen';
import colors from './assets/colors/colors'
import LikedScreen from './Screens/LikedScreen';
import ProfileScreen from './Screens/ProfileScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TabNavigator from './components/TabNavigator';
import StackNavigator from './components/StackNavigator';


const Tab = createBottomTabNavigator();


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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
