import { StyleSheet, View, Dimensions } from 'react-native'
import React from 'react'
import CustomTablet from '../components/CustomTablet'

const BlockedMembers = () => {
  const screenWidth = Dimensions.get('screen').width
  const data = [
    ['ID', 'NAME', 'CUSTOMER ID', 'STATUS', 'EMAIL', 'PHONE', 'SPONSOR', 'UPLINE', 'POSITION', 'DATE'],
    ['1', 'John Doe', '666', 'Blocked', 'john@olymp', '7000000000', 'By Joe', 'Yes', 'Left', '20-05-2023'],
  ];

  return (
    <View style={styles.container}>
      <CustomTablet
        data={data}
        width={screenWidth * 0.25}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
})

export default BlockedMembers
