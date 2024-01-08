import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MyColors } from '../../assets/MyColors';

const HelpCard = ({ icon, title, subtitle }) => {
  return (
    <View style={styles.container}>
      {icon}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: MyColors.cardBackground,
        marginHorizontal: 10,
        padding: 15,
        borderRadius: 10,
    },
    title: {
        color: MyColors.white,
        fontWeight: '600',
        fontSize: 16,
        marginTop: 15,
        marginBottom: 5,
    },
    subtitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    subtitle: {
        color: MyColors.textSecondary,
        fontSize: 14,
    }
})

export default HelpCard