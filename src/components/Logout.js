import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { MyColors } from '../../assets/MyColors';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Logout = ({ icon, title, theme, nav, confirmation }) => {
    const navigation = useNavigation()
    const navigateToLogin = () => {
        confirmation ?
            Alert.alert(
                'Confirm Logout',
                'Are you sure you want to Log out?',
                [
                    {
                        text: 'Cancel',
                        style: 'cancel',
                    },
                    {
                        text: 'Log Out',
                        onPress: async () => {
                            try {
                                await AsyncStorage.removeItem('userLoggedIn');
                            } catch (error) {
                                console.log('Error removing user login state:', error);
                            }
                            navigation.navigate(nav)
                        },
                    },
                ],
                { cancelable: false }
            )
            :
            nav === undefined ? console.warn('Coming soon') :
            navigation.navigate(nav)
    }
    return (
        <View style={styles.container}>
            {icon}
            <TouchableOpacity onPress={navigateToLogin} style={styles.textContainer}>
                <Text
                    style={{
                        color: theme,
                        fontWeight: 'bold',
                        fontSize: 17,
                        textAlign: 'center',
                    }}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: MyColors.cardBackground,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    textContainer: {
        flex: 1,
    },
})

export default Logout
