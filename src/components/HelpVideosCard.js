import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MyColors } from '../../assets/MyColors';

const HelpVideosCard = ({title, duration, img}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.belowContainer}>
        <Text style={styles.duration}>{duration}</Text>
        <Image
            source={img}
            style={styles.image}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        width: 175,
        height: 155,
        backgroundColor: MyColors.cardBackground,
        borderRadius: 10,
        marginEnd: 15,
    },
    title: {
        color: MyColors.white,
        fontWeight: 'bold',
        fontSize: 16,
        padding: 20,
    },
    belowContainer: {
        flexDirection: 'row',
        padding: 20,
        overflow: 'hidden',
    },
    duration: {
        color: MyColors.textSecondary,
    },
    image: {
        width: 75,
        height: 75,
        position: 'absolute',
        bottom: -15,
        right: -5,
      },
})

export default HelpVideosCard