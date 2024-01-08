import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MyColors } from '../../assets/MyColors';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const TerminalTopBar = () => {
    const reduxData = useSelector((state) => state.reducer)
    const [coinId, setCoinId] = useState('bitcoin')
    const navigation = useNavigation()

    useEffect(() => {
        if (reduxData.length) {
            setCoinId(reduxData)
        } else {
            setCoinId('bitcoin')
        }
    }, [reduxData])

    handleNavigation = () => {
        navigation.navigate("Assets")
    }

  return (
    <View style={styles.container}>
        <View style={styles.leftContainer}>
            <TouchableOpacity onPress={handleNavigation} style={styles.coinInfoContainer}>
                <MaterialCommunityIcons name="bitcoin" size={20} color={MyColors.white} />
                <Text style={styles.coinTxt}>{coinId}</Text>
            </TouchableOpacity>
            <View style={styles.percentageContainer}>
                <Text style={styles.percentageTxt}>84%</Text>
            </View>
        </View>
        <View style={styles.rightContainer}>
            <View style={styles.iconsContainer}>
                <FontAwesome6 name="compass-drafting" size={17} color={MyColors.white} />
            </View>
            <View style={styles.iconsContainer}>
                <Text style={styles.areaTxt}>10m</Text>
            </View>
            <View style={styles.iconsContainer}>
                <MaterialCommunityIcons name="access-point-network" size={20} color={MyColors.white} />
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    leftContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: MyColors.secondary,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    coinInfoContainer: {
        flexDirection: 'row',
    },
    coinTxt: {
        color: MyColors.white,
        marginStart: 10,
        fontWeight: 'bold',
        fontSize: 17,
        textTransform: 'capitalize',
    },
    percentageContainer: {
        backgroundColor: MyColors.primary,
        paddingHorizontal: 10,
        paddingVertical: 0,
        borderRadius: 5,
    },
    percentageTxt: {
        color: MyColors.white,
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    rightContainer: {
        flexDirection: 'row',
    },
    iconsContainer: {
        alignSelf: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: MyColors.secondary,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        marginHorizontal: 3,
    },
    areaTxt: {
        color: MyColors.white,
        fontWeight: 'bold',
    },

})

export default TerminalTopBar