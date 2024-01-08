import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import CustomTabBar from '../components/CustomTabBar'

const Tab = createMaterialTopTabNavigator()

const TabNavigation = () => {
  return (
    <Tab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />}
        screenOptions={{ tabBarIndicatorStyle: { backgroundColor: 'transparent' } }}
    >
        <Tab.Screen 
            name='Register'
            component={RegisterScreen}
        />
        <Tab.Screen 
            name='Login'
            component={LoginScreen}
        />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})

export default TabNavigation
