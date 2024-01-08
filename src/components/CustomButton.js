import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MyColors } from '../../assets/MyColors'

const CustomButton = ({label, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: MyColors.primary,
        borderRadius: 10,
    },
    text: {
        color: MyColors.white,
        textAlign: 'center',
        padding: 13,
        fontWeight: 'bold',
        fontSize: 15,
    }
})

export default CustomButton
