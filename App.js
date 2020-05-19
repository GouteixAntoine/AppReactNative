import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert, TabBarIOS} from 'react-native'

import PageInfo from './components/PageInfo';
import Home from './components/Home';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {

  return (
    <View style={styles.container}>
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Accueil" component={Home}/>
            <Stack.Screen name="Information" component={PageInfo}/>
          </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});
