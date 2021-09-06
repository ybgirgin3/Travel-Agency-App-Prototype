import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';

// screens
import HomeScreen from '../Screens/HomeScreen';
import DetailScreen from '../Screens/DetailScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
             <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown: false}}
      />
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}
            />
            <Stack.Screen name="Details" component={DetailScreen} options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})
