import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { MyColors } from '../../assets/MyColors'
import TabNavigation from '../navigations/TabNavigation'

const LoginRegister = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        {/* <Image
            source={require('../../assets/logo.png')}
            style={styles.image}
            resizeMode='contain'
        /> */}
        <Text style={styles.title}>Olymp Trade Clone</Text>
      </View>
      <TabNavigation />
      <View style={styles.socialIconsContainer}>
        <View style={styles.socialIcon}>
            <Image source={require('../../assets/icons/facebook.png')} style={styles.facebookImg}/>
        </View>
        <View style={styles.socialIcon}>
            <Image source={require('../../assets/icons/google.png')} style={styles.facebookImg}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: MyColors.background,
        paddingVertical: 45,
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 25,
      height: 25,
      marginEnd: 5,
    },
    title: {
        color: MyColors.white,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 30,
    },
    socialIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    socialIcon: {
        marginHorizontal: 10,
        backgroundColor: MyColors.white,
        padding: 15,
        borderRadius: 30,
    },
    facebookImg: {
      width: 25,
      height: 25,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
    },
})

export default LoginRegister
