import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TabsHeader from '../components/TabsHeader'
import HelpCard from '../components/HelpCard';
import { MyColors } from '../../assets/MyColors';
import HelpVideosCard from '../components/HelpVideosCard';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const HelpScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <TabsHeader title={"Help"} />
        <View style={styles.miniCardsCointainer}>
          <HelpCard icon={<MaterialCommunityIcons name="chat-question-outline" size={25} color={MyColors.white} />} title="Support" subtitle="Ask a question" />
          <HelpCard icon={<SimpleLineIcons name="graduation" size={25} color={MyColors.white} />} title="Help Center" subtitle="Final answers" />
        </View>
        <View style={styles.cardsCointainer}>
          <HelpCard icon={<FontAwesome name="line-chart" size={25} color={MyColors.white} />} title="Trading Tutorials" subtitle="Everything you need to know to get started" />
        </View>
        <View style={styles.videoContainer}>
          <Text style={styles.videoTxt}>Video Lessons</Text>
          <ScrollView
            horizontal
            contentContainerStyle={styles.scrollViewContent}
            showsHorizontalScrollIndicator={false}
          >
            <HelpVideosCard
              title="Discover the Platform"
              duration="02.01"
              img={require("../../assets/images/graduation.png")}
            />
            <HelpVideosCard
              title="Opening Trades"
              duration="02.01"
              img={require("../../assets/images/arrows.png")}
            />
            <HelpVideosCard
              title="Making Forecasts"
              duration="02.01"
              img={require("../../assets/images/chart.png")}
            />
            <HelpVideosCard
              title="Deposit and Withdrawal"
              duration="02.01"
              img={require("../../assets/images/dollar.png")}
            />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  miniCardsCointainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  cardsCointainer: {
    flexDirection: 'row'
  },
  videoContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  videoTxt: {
    fontWeight: 'bold',
    fontSize: 20,
    color: MyColors.white,
  },
  scrollViewContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
})

export default HelpScreen