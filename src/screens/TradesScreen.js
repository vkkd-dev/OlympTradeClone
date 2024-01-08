import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MyColors } from '../../assets/MyColors';
import TabsHeader from '../components/TabsHeader'
import TradeTabNavigation from '../navigations/TradeTabNavigation';

const Tab = createMaterialTopTabNavigator();

const TradesScreen = () => {
  return (
    <View style={styles.container}>
      <TabsHeader title={"Trades"}/>
      <TradeTabNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MyColors.background,
  },
});

export default TradesScreen;
