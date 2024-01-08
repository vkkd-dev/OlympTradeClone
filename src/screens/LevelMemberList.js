import { StyleSheet, View, Dimensions } from 'react-native'
import React from 'react'
import CustomTablet from '../components/CustomTablet'

const LevelMemberList = () => {
  const screenWidth = Dimensions.get('screen').width

  const data = [
    ['ID', 'SPONSOR', 'MEMBER', 'LEVEL ACHIEVE'],
    ['1', 'John Doe', 'Member1', '3'],
    ['2', 'Jane Smith', 'Member2', '5'],
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
    margin: 30,
  }
})

export default LevelMemberList
