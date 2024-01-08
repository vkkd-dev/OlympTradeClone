import { StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginRegister from '../screens/LoginRegister'
import HomeBottomTabs from './HomeBottomTabs';
import TradesScreen from '../screens/TradesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { MyColors } from '../../assets/MyColors';
import AssetsScreen from '../screens/AssetsScreen';
import MemberRegistration from '../screens/MemberRegistration';
import SponserMembers from '../screens/SponserMembers';
import LevelMemberList from '../screens/LevelMemberList';
import PendingMembers from '../screens/PendingMembers';
import BlockedMembers from '../screens/BlockedMembers';
import ActiveMembers from '../screens/ActiveMembers';
import MyTradingPackages from '../screens/MyTradingPackages';
import GenealogyTree from '../screens/GenealogyTree';
import GenealogyReport from '../screens/GenealogyReport';
import InvestmentDeposit from '../screens/InvestmentDeposit';
import DepositStatements from '../screens/DepositStatements';
import WalletTransferReport from '../screens/WalletTransferReport';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TNCScreen from '../screens/TNCScreen';
import ForgotPassword from '../screens/ForgotPassword';
import ChnagePassword from '../screens/ChangePassword';
import TransactionPassword from '../screens/TransactionPassword';
import Notifications from '../screens/Notifications';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator()

const Navigation = () => {

  return (
    <Stack.Navigator
      initialRouteName='Splash'
    >
      <Stack.Screen
        name={'Splash'}
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'Root'}
        component={LoginRegister}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeBottomTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Trades'
        component={TradesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Profile'
        component={ProfileScreen}
        options={({ navigation }) => ({
          title: 'Profile',
          headerTitleAlign: 'center',
          headerTintColor: MyColors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: MyColors.background,
          },
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 16 }}
              onPress={() => navigation.navigate('Profile')}
            >
              <Ionicons name="notifications-outline" size={25} color={MyColors.white} onPress={() => navigation.navigate("Notifications")}/>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name='Assets'
        component={AssetsScreen}
        options={({ navigation }) => ({
          title: 'Assets',
          headerTitleAlign: 'center',
          headerTintColor: MyColors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: MyColors.background,
          },
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 16 }}
              onPress={() => console.log('pressed')}
            >
              <Ionicons name="search" size={24} color={MyColors.white} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name='MembersRegistration'
        component={MemberRegistration}
        options={{
          title: "Member Registration",
          headerTitleAlign: 'center',
          headerTintColor: MyColors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: MyColors.background,

          },
        }}
      />
      <Stack.Screen
        name='SponserMembers'
        component={SponserMembers}
        options={{
          title: "Sponser Member",
          headerTitleAlign: 'center',
          headerTintColor: MyColors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: MyColors.background,

          },
        }}
      />
      <Stack.Screen
        name='LevelMemberList'
        component={LevelMemberList}
        options={{
          title: "Level Member List",
          headerTitleAlign: 'center',
          headerTintColor: MyColors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: MyColors.background,

          },
        }}
      />
      <Stack.Screen
        name='PendingMembers'
        component={PendingMembers}
        options={{
          title: "Pending Members",
          headerTitleAlign: 'center',
          headerTintColor: MyColors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: MyColors.background,

          },
        }}
      />
      <Stack.Screen
        name='ActiveMembers'
        component={ActiveMembers}
        options={{
          title: "Active Members",
          headerTitleAlign: 'center',
          headerTintColor: MyColors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: MyColors.background,

          },
        }}
      />
      <Stack.Screen
        name='BlockedMembers'
        component={BlockedMembers}
        options={{
          title: "Blocked Members",
          headerTitleAlign: 'center',
          headerTintColor: MyColors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: MyColors.background,

          },
        }}
      />
      <Stack.Screen
        name='MyTradingPackages'
        component={MyTradingPackages}
        options={{
          title: "My Trading Packages",
          headerTitleAlign: 'center',
          headerTintColor: MyColors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: MyColors.background,

          },
        }}
      />
      <Stack.Screen
        name='GenealogyTree'
        component={GenealogyTree}
        options={{
          title: "Genealogy Tree",
          headerTitleAlign: 'center',
          headerTintColor: MyColors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: MyColors.background,

          },
        }}
      />
      <Stack.Screen
        name='GenealogyReport'
        component={GenealogyReport}
        options={{
          title: "Genealogy Report",
          headerTitleAlign: 'center',
          headerTintColor: MyColors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: MyColors.background,

          },
        }}
      />
      <Stack.Screen
        name='InvestmentDeposit'
        component={InvestmentDeposit}
        options={{
          title: "Investment Deposit",
          headerTitleAlign: 'center',
          headerTintColor: MyColors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: MyColors.background,

          },
        }}
      />
      <Stack.Screen
        name='DepositStatements'
        component={DepositStatements}
        options={{
          title: "Deposit Statements",
          headerTitleAlign: 'center',
          headerTintColor: MyColors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: MyColors.background,

          },
        }}
      />
      <Stack.Screen
        name='WalletTransferReport'
        component={WalletTransferReport}
        options={{
          title: "Wallet Transfer Report",
          headerTitleAlign: 'center',
          headerTintColor: MyColors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: MyColors.background,

          },
        }}
      />
      <Stack.Screen
        name='ForgotPassword'
        component={ForgotPassword}
        options={{
          title: "Forgot Password",
          headerTitleAlign: 'center',
          headerTintColor: MyColors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: MyColors.background,

          },
        }}
      />
      <Stack.Screen
        name='TNCScreen'
        component={TNCScreen}
        options={{
          title: "TNC Screen",
          headerTitleAlign: 'center',
          headerTintColor: MyColors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: MyColors.background,

          },
        }}
      />
      <Stack.Screen
        name='ChnagePassword'
        component={ChnagePassword}
        options={{
          title: "Chnage Password",
          headerTitleAlign: 'center',
          headerTintColor: MyColors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: MyColors.background,

          },
        }}
      />
      <Stack.Screen
        name='TransactionPassword'
        component={TransactionPassword}
        options={{
          title: "Transaction Password",
          headerTitleAlign: 'center',
          headerTintColor: MyColors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: MyColors.background,

          },
        }}
      />
      <Stack.Screen
        name='Notifications'
        component={Notifications}
        options={{
          title: "Notifications",
          headerTitleAlign: 'center',
          headerTintColor: MyColors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: MyColors.background,

          },
        }}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})

export default Navigation
