import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MyColors } from '../../assets/MyColors';

const TradesNoTrades = ({text, icon}) => {
  return (
    <View style={styles.container}>
        <View style={styles.iconContainer}>
            {icon}
        </View>
        <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    iconContainer: {
        padding: 20,
        borderRadius: 10,
    },
    text: {
        color: MyColors.textSecondary,
        fontWeight: '100',
    }
})

export default TradesNoTrades