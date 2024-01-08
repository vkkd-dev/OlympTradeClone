import { Linking, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MyColors } from '../../assets/MyColors'
import CustomButton from '../components/CustomButton';

const ForgotPassword = ({ route }) => {
    const { data } = route.params;

    const handleOpening = async () => {
        const gmailURI = 'googlegmail://';
        try {
            const supported = await Linking.canOpenURL(gmailURI)
            if (!supported) {
                Linking.openURL('https://mail.google.com/');
            } else {
                return Linking.openURL(gmailURI)
            }
        } catch (error) {
            console.error('An error caused ', err)
        }
    }
    
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Recovery link has been sent to</Text>
      <Text style={styles.email}>{data}</Text>
      <CustomButton
        label="Open Gmail"
        onPress={handleOpening}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    },
    text: {
        color: MyColors.white,
        fontSize: 15,
    },
    email: {
        color: MyColors.textSecondary,
        fontSize: 16,
        marginTop: 5,
        marginBottom: 20,
    }
})

export default ForgotPassword