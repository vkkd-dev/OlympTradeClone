import { StyleSheet, Dimensions, View } from 'react-native'
import React from 'react'
import CustomTablet from '../components/CustomTablet'

const GenealogyReport = () => {
    const screenWidth = Dimensions.get('window').width
    const screenHeight = Dimensions.get('window').height
    const data = [
        ['ID', 'NAME', 'CUSTOMER ID', 'SPONSOR', 'INVESTMENT AMOUNT', 'LEFT', 'RIGHT', 'TOTAL'],
        ['1', 'john', '06', 'Non', '70000', 'No', 'Yes', '100'],
    ];

    return (
        <View style={styles.container}>
            <CustomTablet
                data={data}
                width={screenWidth * .35}
                height={screenHeight * .1}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 30
    },
})

export default GenealogyReport
