import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MyColors } from '../../assets/MyColors';

const TabsHeader = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    title: {
        color: MyColors.white,
        fontSize: 28,
        fontWeight: 'bold',
    }
})

export default TabsHeader