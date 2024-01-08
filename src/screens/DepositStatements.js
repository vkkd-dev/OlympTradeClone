import { StyleSheet, View } from 'react-native'
import React from 'react'
import CustomTablet from '../components/CustomTablet'

const DepositStatements = () => {
    const data = [
        ['ID',	'PAYMENT MODE',	'ACOOUNT NO',	'DEPOSIT AMOUNT',	'NO OF TOKENS',	'DEPOSIT DATE',	'TRANSACTION NO',	'REQUEST DATE'],
        ['1', 'Online', '60021365879', '899999', '10000000054', '02/06/2023', '13254153110', '20-05-2023'],
    ];

    return (
        <View style={styles.container}>
            <CustomTablet
                data={data}
                width={170}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 30,
    }
})

export default DepositStatements
