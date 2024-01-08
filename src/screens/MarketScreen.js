import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TabsHeader from '../components/TabsHeader'
import MarketList from '../components/MarketList'
import MarketCards from '../components/MarketCards'

const MarketScreen = () => {
  return (
    <View>
      <ScrollView>
        <TabsHeader title="Market"/>
        <MarketList text="My Purchase & Rewards"/>
        <MarketList text="My Publish Strategies"/>
        <MarketCards img={require("../../assets/images/target.png")} title="Trading Conditions" subtitle="Features that provide more beneficial trading conditions" theme="rgba(127,70,56,.5)" />
        <MarketCards img={require("../../assets/images/trade.png")} title="Signals" subtitle="Algorithm-based recommendations on when to open trades" theme="rgba(0,160,198,.5)"/>
        <MarketCards img={require("../../assets/images/strategy.png")} title="Custom Strategies" subtitle="Buy trades-created strategies best suited to your trading style" theme="rgba(255,62,58,.5)"/>
        <MarketCards img={require("../../assets/images/idea.png")} title="Strategies" subtitle="Ready-to-use sets of tools that make it easier to spot entry and exit points" theme="rgba(231,205,69,.5)"/>
        <MarketCards img={require("../../assets/images/tool.png")} title="Indicators" subtitle="Tools that help analyze price movements and identify entry points" theme="rgba(2,239,235,.5)"/>
        <MarketCards img={require("../../assets/images/themes.png")} title="Themes" subtitle="Different color themes for customizing the appearence of the interface" theme="rgba(255,118,64,.5)"/>
        <MarketCards title="Advisers" subtitle="Indicator-based signals that help identify entry points" type="noimg" theme="rgba(0,0,0,0)"/>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default MarketScreen