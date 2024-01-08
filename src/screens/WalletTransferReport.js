import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import CustomTablet from '../components/CustomTablet'
import CustomInputText from '../components/CustomInputText'
import CustomButton from '../components/CustomButton'

const WalletTransferReport = () => {
  const [memberId, setMemberId] = useState("")
  const [amount, setAmount] = useState("")
  const [token, setToken] = useState("")

  const data = [
    ['ID', 'MEMBER ID', 'NAME', 'AMOUNT	NO OF TOKENS'],
    ['1', '066', 'John', '7000000000'],
  ];

  const handleOnPress = () => {
    console.log('pressed')
  }

  return (
    <View style={styles.container}>
      <CustomInputText
        label={"Member ID"}
        value={memberId}
        onchange={setMemberId}
      />
      <CustomInputText
        label={"Amount To be Transfer"}
        value={amount}
        onchange={setAmount}
      />
      <CustomInputText
        label={"No of Token"}
        value={token}
        onchange={setToken}
      />
      <CustomButton
        label="Transfer Now"
        onPress={handleOnPress}
      />
      <CustomTablet
        data={data}
        width={250}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
  }
})

export default WalletTransferReport
