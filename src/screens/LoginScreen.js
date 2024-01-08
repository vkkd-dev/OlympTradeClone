import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { MyColors } from '../../assets/MyColors';
import { useNavigation } from '@react-navigation/native';
import CustomErrorModal from '../components/CustomErrorModal';
import CustomButton from '../components/CustomButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const navigation = useNavigation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false)
  const [errorVisible, setErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')
  const [errorType, setErrorType] = useState('')

  const handleShowError = () => {
    setErrorVisible(true);
  };

  const handleShowPassword = () => {
    setShowPassword((showPassword) => !showPassword)
  }

  const navigateToHome = async () => {

    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isEmailValid = emailPattern.test(email);
    setEmailValid(isEmailValid);

    const isPasswordValid = password.length >= 6 && password.length <= 12;
    setPasswordValid(isPasswordValid);

    if (!isEmailValid) {
      setErrorMessage('Email must be valid.')
      setErrorType('error')
      handleShowError()
      return;
    }

    if (!isPasswordValid) {
      setErrorMessage('Password must be between 6-12 length.')
      setErrorType('error')
      handleShowError()
      return;
    }

    try {
      await AsyncStorage.setItem('userLoggedIn', 'true');
    } catch (error) {
      console.log('Error saving user login state:', error);
    }

    navigation.navigate("Home", email)
  }

  const handleForgotPassword = () => {
    if (email.trim() === '') {
      setErrorMessage('Email cannot be empty.')
      setErrorType('error')
      handleShowError()
    } else {
      navigation.navigate("ForgotPassword", { data: email })
    }
  }

  return (
    <View style={styles.container}>
      <CustomErrorModal
        visible={errorVisible}
        setModalVisible={setErrorVisible}
        message={errorMessage}
        type={errorType}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, !emailValid && styles.inputError]}
          placeholder="Email or user id"
          placeholderTextColor={MyColors.textSecondary}
          onChangeText={setEmail}
          value={email}
          keyboardType='email-address'
          autoCapitalize='none'
        />
        <MaterialIcons name="alternate-email" size={20} color={MyColors.darkGray} style={styles.icon} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, !passwordValid && styles.inputError]}
          placeholder="Password"
          placeholderTextColor={MyColors.textSecondary}
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
        <Feather name={showPassword ? "eye-off" : "eye"} size={20} color={MyColors.darkGray} style={styles.icon} onPress={handleShowPassword} />
      </View>
      <TouchableOpacity onPress={handleForgotPassword} style={{ marginBottom: 20 }}>
        <Text style={styles.forgotTxt}>Forgot your password?</Text>
      </TouchableOpacity>
      <CustomButton
        label="Log in"
        onPress={navigateToHome}
      />
    </View>
  );
};

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
    color: 'white',
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
    padding: 10,
    fontSize: 17,
    fontWeight: '400',
    letterSpacing: 0.5,
  },
  inputError: {
    borderColor: MyColors.red,
  },
  icon: {
    alignSelf: 'center',
    marginEnd: 15,
  },
  forgotTxt: {
    color: MyColors.primary,
    fontSize: 17,
  },
  loginContainer: {
    width: '100%',
    backgroundColor: MyColors.primary,
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 15,
  },
  loginTxt: {
    color: MyColors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  }
})

export default LoginScreen;
