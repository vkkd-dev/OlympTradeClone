import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TradesNoTrades from '../components/TradesNoTrades'
import { MyColors } from '../../assets/MyColors';
import Feather from 'react-native-vector-icons/Feather';

const ForexScreen = () => {
  return (
    <View>
      <TradesNoTrades
        text={"You have o opne trades on this account"}
        icon={<Feather name="info" size={24} color={MyColors.textSecondary} style={{ marginVertical:20 }} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default ForexScreen 