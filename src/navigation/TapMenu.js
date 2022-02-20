import React, { useRef } from "react";
import {Animated, Dimensions, Text, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen'
import TodoScreen from '../screens/TodoScreen'
import UserScreen from '../screens/UserScreen'

const Tab = createBottomTabNavigator();

export default function TabMenu() {
    const tabOffsetValue = useRef(new Animated.Value(0).current)
    return (
           <>
               <Tab.Navigator
                   tabBarOptions={{
                       showLabel: false,
                   }}
                   screenOptions={({ route }) => ({
                       headerShown: false,
                       tabBarInactiveTintColor: 'gray',
                       tabBarActiveTintColor: 'tomato',
                       tabBarStyle: {
                           backgroundColor: '#FFECE0',
                           border: 'none',
                           borderTopLeftRadius: 20,
                           borderTopRightRadius: 20,
                       }
                   })}
               >
                   <Tab.Screen
                       name="Home"
                       component={HomeScreen}
                       options={{
                           tabBarIcon: ({focused}) => (
                               <Ionicons
                                   name='home'
                                   size={20}
                                   color={focused ? 'tomato' : 'black'}
                               />
                           ),
                       }} />
                   <Tab.Screen name="Todo" component={TodoScreen} options={{
                       tabBarIcon: ({focused}) => (
                           <Ionicons
                               name='list'
                               size={23}
                               color={focused ? 'tomato' : 'black'}
                           />

                       ),
                   }} />
                   <Tab.Screen name="User" component={UserScreen} options={{
                       tabBarIcon: ({focused}) => (
                           <Ionicons
                               name='person'
                               size={20}
                               color={focused ? 'tomato' : 'black'}
                           />

                       ),
                   }} />
               </Tab.Navigator>
           </>
    );
}
