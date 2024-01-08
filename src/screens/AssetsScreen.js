import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import CoinItem from '../components/CoinItems'
import cryptocoins from '../../assets/data/cryptocurrencies.json'

const AssetsScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList 
          data={cryptocoins}
          renderItem={({item}) => <CoinItem marketCoin={item}/> }
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default AssetsScreen
