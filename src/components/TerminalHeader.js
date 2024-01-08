import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MyColors } from '../../assets/MyColors';
import { useNavigation } from '@react-navigation/native';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';

const TerminalHeader = ({ onPressResponse }) => {

  const navigation = useNavigation()

  const handleOnPress = () => {
    onPressResponse()
  }

  const navigateToLogin = () => {
    navigation.navigate("Profile")
  }

  return (
    <View style={styles.header}>
      <View style={styles.demoContainer}>
        <Text style={styles.demoTxt}>DEMO ACCOUNT</Text>
        <View style={styles.amountCointainer}>
          <Text style={styles.amountTxt}>D10,000.00</Text>
          <Entypo name="chevron-small-down" size={24} color={MyColors.white} />
        </View>
      </View>
      <View style={styles.rightConatiner}>
        <TouchableOpacity onPress={handleOnPress} style={styles.paymentsConatiner}>
          <Text style={styles.paymentsTxt}>Payments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileContainer} onPress={navigateToLogin}>
          <Octicons name="person" size={25} color={MyColors.white} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  demoContainer: {

  },
  rightConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentsConatiner: {
    backgroundColor: MyColors.primary,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  paymentsTxt: {
    color: MyColors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  demoTxt: {
    color: MyColors.yellow,
    fontSize: 12,
    fontWeight: '600',
  },
  amountCointainer: {
    flexDirection: 'row',
  },
  amountTxt: {
    color: MyColors.white,
    fontSize: 15,
    fontWeight: 'bold',
    marginEnd: 10,
    letterSpacing: 0.5,
  },
  profileContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: MyColors.secondary,
    marginStart: 10,
  },
})

export default TerminalHeader