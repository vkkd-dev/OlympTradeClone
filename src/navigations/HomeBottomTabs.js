import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TerminalScreen from '../screens/TerminalScreen'
import TradesScreen from '../screens/TradesScreen'
import MarketScreen from '../screens/MarketScreen'
import EventsScreen from '../screens/EventsScreen'
import HelpScreen from '../screens/HelpScreen'
import TabIcons from '../components/TabIcon';
import { MyColors } from '../../assets/MyColors'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const home = require("../../assets/icons/home.png");
const tradeOpen = require("../../assets/icons/trade.png");
const tradeClose = require("../../assets/icons/close.png");
const portfolio = require("../../assets/icons/briefcase.png");
const market = require("../../assets/icons/market.png");
const profile = require("../../assets/icons/profile.png");

const HomeBottomTabs = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarActiveTintColor: MyColors.white,
            tabBarInactiveTintColor: MyColors.textBackground,
            tabBarStyle: {
                backgroundColor: MyColors.background,
                borderTopColor: 'transparent',
                height: 75,
              }
        }}
    >
      <Tab.Screen 
        name="Terminal" 
        component={TerminalScreen}
        options={{
            tabBarIcon: ({focused}) => {
                return (
                    <TabIcons 
                        focused={focused}
                        icon={<AntDesign name="linechart" size={24} color={ focused ? MyColors.white : MyColors.darkGray } />}
                        label="Terminal"
                    />
                )
            }
        }} />
      <Tab.Screen 
        name="Trades" 
        component={TradesScreen} 
        options={{
            tabBarIcon: ({focused}) => {
                return (
                    <TabIcons 
                      focused={focused}
                      icon={<MaterialIcons name="currency-exchange" size={24} color={ focused ? MyColors.white : MyColors.darkGray } />}
                      label="Trade"
                    />
                  )
            }
        }}
        />
      <Tab.Screen 
        name="Market" 
        component={MarketScreen} 
        options={{
            tabBarIcon: ({focused}) => {
              return (
                <TabIcons 
                  focused={focused}
                  icon={<Feather name="shopping-bag" size={24} color={ focused ? MyColors.white : MyColors.darkGray } />}
                  label="Market"
                />
              )
            },
        }}
        />
      <Tab.Screen 
        name="Events" 
        component={EventsScreen}
        options={{
            tabBarIcon: ({focused}) => {
                return (
                    <TabIcons 
                      focused={focused}
                      icon={<Ionicons name="trophy-outline" size={24} color={ focused ? MyColors.white : MyColors.darkGray } />}
                      label="Events"
                    />
                  )
            }
        }} 
        />
      <Tab.Screen 
        name="Help" 
        component={HelpScreen} 
        options={{
            tabBarIcon: ({focused}) => {
                return (
                    <TabIcons 
                      focused={focused}
                      icon={<Feather name="help-circle" size={24} color={ focused ? MyColors.white : MyColors.darkGray } />}
                      label="Help"
                    />
                  )
            }
        }}
        />
    </Tab.Navigator>
  );
};

export default HomeBottomTabs;
