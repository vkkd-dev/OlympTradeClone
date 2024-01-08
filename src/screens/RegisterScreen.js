import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { MyColors } from '../../assets/MyColors';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = () => {
  const navigation = useNavigation()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const navigateToHome = async () => {
    try {
      await AsyncStorage.setItem('userLoggedIn', 'true');
    } catch (error) {
      console.log('Error saving user login state:', error);
    }
    navigation.navigate("Home")
  }

  const navigateToTNC = () => {
    navigation.navigate("TNCScreen")
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor={MyColors.textSecondary}
          autoCapitalize='words'
          value={name}
          onChangeText={setName}
        />
        <Octicons name="person" size={20} color={MyColors.darkGray} style={styles.icon} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Phone"
          placeholderTextColor={MyColors.textSecondary}
          value={phone}
          onChangeText={setPhone}
          keyboardType='phone-pad'
        />
        <AntDesign name="phone" size={20} color={MyColors.darkGray} style={styles.icon} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={MyColors.textSecondary}
          value={email}
          onChangeText={setEmail}
          keyboardType='email-address'
          autoCapitalize='none'
        />
        <Fontisto name="email" size={20} color={MyColors.darkGray} style={styles.icon} />
      </View>
      <CustomButton
        label="Register"
        onPress={navigateToHome}
      />
      <Text style={styles.tncContainer}>
        <Text style={styles.tncTxt1}>By pressing Register, you confirm that you are of legal age and accept the </Text>
        <TouchableOpacity onPress={navigateToTNC}>
          <Text style={styles.tncTxt2}>terms of the Service Agreement and Privacy Policy</Text>
        </TouchableOpacity>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MyColors.background,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', // Text color in dark theme
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: MyColors.secondary,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    marginBottom: 15,
  },
  input: {
    width: '80%',
    color: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 17,
    fontWeight: '400',
    letterSpacing: 0.5,
  },
  icon: {
    alignSelf: 'center',
    marginEnd: 15,
  },
  registerContainer: {
    width: '100%',
    backgroundColor: MyColors.primary,
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 15,
  },
  registerTxt: {
    color: MyColors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  tncContainer: {
    marginTop: 10,
    alignSelf: 'center',
  },
  tncTxt1: {
    color: MyColors.darkGray,
    fontSize: 12,
  },
  tncTxt2: {
    color: MyColors.primary,
    textDecorationLine: 'underline',
    fontSize: 12,
  }
})

export default RegisterScreen
