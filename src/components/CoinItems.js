import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { MyColors } from '../../assets/MyColors';
import { useNavigation } from '@react-navigation/native';
import { setCoinId, resetCoinId } from '../redux/action';
import { useDispatch } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CoinItem = ({ marketCoin }) => {
  const dispatch = useDispatch()

  const { 
    id,
    name, 
    current_price, 
    market_cap_rank, 
    market_cap, 
    price_change_percentage_24h, 
    symbol, 
    image 
  } = marketCoin

  const simplifyMarketCap = (maeketCap) => {
    if (maeketCap > 1_000_000_000_000) {
      return `${Math.floor(maeketCap / 1_000_000_000_000)} T`
    }
    if (maeketCap > 1_000_000_000) {
      return `${Math.floor(maeketCap / 1_000_000_000)} B`
    }
    if (maeketCap > 1_000_000) {
      return `${Math.floor(maeketCap / 1_000_000)} M`
    }
    if (maeketCap > 1_000) {
      return `${Math.floor(maeketCap / 1_000)} K`
    }
    return maeketCap
  }

  const handleNavigation = () => {
    dispatch(setCoinId(id))
    navigation.navigate("Home")
  }

  const persentageColor = price_change_percentage_24h < 0 ? '#ea3943' : '#16c784' || '#fff'
  const navigation = useNavigation()

  return (
    <Pressable 
      onPress={handleNavigation}
    >
      <View style={styles.coinContainer}>
        <Image
          source={{ uri: image }}
          style={styles.coinImg}
          />
        <View>
          <Text style={styles.title}>{name}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.rankContainer}>
              <Text style={styles.rank}>{market_cap_rank}</Text>
            </View>
            <Text style={styles.text}>{symbol.toUpperCase()}</Text>
            <AntDesign 
              name={price_change_percentage_24h < 0 ? 'caretdown' : 'caretup'} 
              size={12} 
              color={persentageColor}
              style={{alignSelf: 'center', marginEnd: 5}}  
              />
            <Text style={{color: persentageColor, alignSelf: 'center',}}>{price_change_percentage_24h?.toFixed(2)}%</Text>
          </View>
        </View>
        <View style={{ marginLeft: 'auto', alignItems: 'flex-end' }}>
          <Text style={styles.title}>{current_price}</Text>
          <Text style={styles.text}>MCap {simplifyMarketCap(market_cap)}</Text>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  coinContainer: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: MyColors.listDivider,
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  coinImg: {
    width: 30,
    height: 30,
    marginEnd: 10,
    alignSelf: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: MyColors.white
  },
  rankContainer: {
    backgroundColor: MyColors.textBackground,
    paddingHorizontal: 5,
    borderRadius: 5,
    alignSelf: 'center',
  },
  rank: {
    fontWeight: 'bold',
    color: MyColors.white,
  },
  text: {
    color: MyColors.white,
    margin: 5,
  },
})

export default CoinItem