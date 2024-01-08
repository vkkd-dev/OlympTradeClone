import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import TabsHeader from '../components/TabsHeader'
import EventCards from '../components/EventCards'
import EventsMiniCard from '../components/EventsMiniCard'
import { MyColors } from '../../assets/MyColors';
import Octicons from 'react-native-vector-icons/Octicons';

const EventsScreen = () => {
  return (
    <View>
      <ScrollView>
        <TabsHeader title="Events" />
        <View style={styles.miniCardsCointainer}>
          <EventsMiniCard img={require('../../assets/images/bull.png')} title="Leagues" subtitle="Join now" />
          <EventsMiniCard
            img={require('../../assets/images/battle.png')} title="Battles" subtitle="90"
            icon={<Octicons name="feed-person" size={15} color={MyColors.green} style={styles.icon} />}
          />
        </View>
        <EventCards title="Exclusive Trading Signal Club" description="24 days" img={require("../../assets/images/eventsimg1.jpg")} theme="#EFA85B" gradient="rgb(254, 222, 175)" />
        <EventCards title="From Beginner to Achiever" subtitle1="9 WEEKS" subtitle2="Educational marathan" description="2 months" img={require("../../assets/images/eventsimg2.jpg")} theme="#25344A" gradient="rgb(37, 52, 74)" />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  miniCardsCointainer: {
    flexDirection: 'row',
  },
})

export default EventsScreen