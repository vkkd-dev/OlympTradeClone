import { StyleSheet, Dimensions, View } from 'react-native'
import React from 'react'
import CustomTablet from '../components/CustomTablet';

const SponserMembers = () => {
  const screenWidth = Dimensions.get('screen').width

  const data = [
    ['ID', 'SPONSOR', 'MEMBER'],
    ['1', 'John Doe', 'Member1'],
    ['2', 'Jane Smith', 'Member2'], 
  ];

  return (
    <View style={styles.container}>
      <CustomTablet 
        data={data}
        width={screenWidth * 0.4}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
})

export default SponserMembers