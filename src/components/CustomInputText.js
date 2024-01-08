import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MyColors } from '../../assets/MyColors';
import { TextInput } from 'react-native'

const CustomInputText = ({label, type, password, value, onchange, capitalize, error}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, error && styles.inputError]}
        placeholder={label}
        color={MyColors.white}
        placeholderTextColor={MyColors.textSecondary}
        keyboardType={type}
        secureTextEntry={password}
        value={value}
        onChangeText={onchange}
        autoCapitalize={capitalize}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: MyColors.cardBackground,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    marginBottom: 20,
  },
  input: {
    padding: 10,
    color: MyColors.white,
    letterSpacing: 0.5,
    fontWeight: '400',
    fontSize: 15,
  },
  inputError: {
    borderWidth: 1,
    borderColor: MyColors.red,
    borderRadius: 5,
    paddingStart: 10,
  },
})

export default CustomInputText
