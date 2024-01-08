import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import StocksScreen from '../screens/StocksScreen'
import ForexScreen from '../screens/ForexScreen '
import FixedTimeScreen from '../screens/FixedTimeScreen '
import CustomTabBar from '../components/CustomTabBar';
import { MyColors } from '../../assets/MyColors';

const Tab = createMaterialTopTabNavigator()

const TradeTabNavigation = () => {

  return (
    <View style={styles.tabContainer}>
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: MyColors.primary,
                tabBarInactiveTintColor: MyColors.textSecondary,
                tabBarIndicatorStyle: {
                    backgroundColor: MyColors.primary,
                },
                tabBarLabelStyle: {
                    textTransform: 'capitalize',
                    fontWeight: 'bold',
                    fontSize: 16,
                }
            }}
        >
          <Tab.Screen 
            name="Fixed Time" 
            component={FixedTimeScreen} 
            />
          <Tab.Screen 
            name="Forex" 
            component={ForexScreen} 
            />
          <Tab.Screen 
            name="Stocks" 
            component={StocksScreen} 
            />
        </Tab.Navigator>
      </View>
  )
}

const styles = StyleSheet.create({
    tabContainer: {
        flex: 1,
        paddingVertical: 8,
      },
      tabContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
})

export default TradeTabNavigation