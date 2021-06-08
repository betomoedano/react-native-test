import React from 'react';
import {NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet} from 'react-native';
import Tabs from './navigation/tabs';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tabs/>
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
  fixToText: {
    flexDirection: "row",
    justifyContent: 'space-between',
  }
});