import { StyleSheet, Image, View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { MyColors } from '../../assets/MyColors'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {

    const navigation = useNavigation()

    useEffect(() => {
        checkUserLoginStatus();
    }, []);

    const checkUserLoggedIn = async () => {
        try {
            const userLoggedIn = await AsyncStorage.getItem('userLoggedIn');
            return userLoggedIn === 'true';
        } catch (error) {
            console.log('Error checking user login state:', error);
            return false;
        }
    };

    const checkUserLoginStatus = async () => {
        const isLoggedIn = await checkUserLoggedIn();
        if (isLoggedIn) {
            navigation.navigate('Home')
        } else {
            navigation.navigate('Root')
        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} style={styles.img} resizeMode='contain' />
            <Text style={styles.txt}>Checking User...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 150,
        height: 150,
    },
    txt: {
        color: MyColors.textSecondary,
        fontSize: 15,
        fontStyle: 'italic',
    },
})

export default SplashScreen
