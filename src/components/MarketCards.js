import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { MyColors } from '../../assets/MyColors';
import LinearGradient from 'react-native-linear-gradient';

const MarketCards = ({img, title, subtitle, type, theme}) => {
  return (
    <View style={styles.container}>
      {type=="noimg" ? null : 
        <Image
        source={img}
        style={styles.image}
    />
      }
      <LinearGradient
            colors={[theme, 'transparent']}
            start={{ x: 1, y: 0 }} // Start from the top-right corner
            end={{ x: 0.5, y: 1 }} // Fade towards the bottom-left corner
            style={styles.gradient}
          />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: MyColors.cardBackground,
        marginTop: 15,
        marginHorizontal: 20,
        borderRadius: 10,
    },
    title: {
        color: MyColors.white,
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    subtitle: {
        color: MyColors.textSecondary,
        fontSize: 15,
    },
    image: {
      alignSelf: 'flex-end',
      width: 200,
      height: 200,
    },
    gradient: {
      ...StyleSheet.absoluteFillObject, // Take the full space of the container
      justifyContent: 'center',
      alignItems: 'center',
    },
})

export default MarketCards