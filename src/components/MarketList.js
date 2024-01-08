import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MyColors } from '../../assets/MyColors';
import Entypo from 'react-native-vector-icons/Entypo';

const MarketList = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Entypo name="chevron-small-right" size={15} color={MyColors.white} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 17,
        backgroundColor: MyColors.secondary,
        marginTop: 15,
        marginHorizontal: 20,
        borderRadius: 10,
    },
    text: {
        color: MyColors.white,
        fontWeight: 'bold',
        fontSize: 15
    }
})

export default MarketList