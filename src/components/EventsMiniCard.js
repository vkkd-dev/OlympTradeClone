import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MyColors } from '../../assets/MyColors';

const EventsMiniCard = ({ img, title, subtitle, icon }) => {
  console.log(img)
  return (
    <View style={styles.container}>
      <Image
            source={img}
            style={styles.image}
        />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.subtitleContainer}>
          {icon}
          <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: MyColors.cardBackground,
        marginVertical: 20,
        marginHorizontal: 10,
        padding: 15,
        borderRadius: 10,
    },
    title: {
        color: MyColors.white,
        fontWeight: 'bold',
        fontSize: 16,
    },
    subtitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    subtitle: {
        color: MyColors.textSecondary,
        fontSize: 14,
        marginStart: 5,
    },
    image: {
      width: 50,
      height: 50,
    },
})

export default EventsMiniCard