import { StyleSheet, Dimensions, View } from 'react-native'
import React from 'react'
import CustomTablet from '../components/CustomTablet'

const MyTradingPackages = () => {
    const screenWidth = Dimensions.get('window').width
    const screenHeight = Dimensions.get('window').height
    const data = [
        ['ID', 'PACKAGE NAME', 'STARTING PACKAGE PRICE', 'ENDING PACKAGE PRICE', 'STATUS', 'DATE'],
        ['1', 'Package 1', '6000', '7000', 'Offline', '20-05-2023'],
    ];

    return (
        <View style={styles.container}>
            <CustomTablet
                data={data}
                width={screenWidth * .3}
                height={screenHeight * .07}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 30,
    },
})

export default MyTradingPackages
