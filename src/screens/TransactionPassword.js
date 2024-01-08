import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import CustomInputText from '../components/CustomInputText'
import CustomButton from '../components/CustomButton'
import CustomErrorModal from '../components/CustomErrorModal'
import { useNavigation } from '@react-navigation/native'

const TransactionPassword = () => {

    const navigation = useNavigation()
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [conNewPassword, setConNewPassword] = useState('')
    const [errorVisible, setErrorVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')
    const [errorType, setErrorType] = useState('')
    const [passwordError, setpasswordError] = useState(false)
    const [oldPasswordError, setOldPasswordError] = useState(false)
    const [conNewPasswordError, setConNewPasswordError] = useState(false)

    const handleShowError = () => {
        setErrorVisible(true);
    };

    const handleConfirm = () => {
        const isPasswordValid = oldPassword.length >= 6 && oldPassword.length <= 12 && newPassword.length >= 6 && newPassword.length <= 12 && conNewPassword.length >= 6 && conNewPassword.length <= 12
        const isOldPasswordValid = oldPassword === '123456'
        const isPasswordMatch = newPassword === conNewPassword
        if (!isPasswordValid) {
            setErrorMessage('Passwords must be between 6-12 length.')
            setErrorType('error')
            handleShowError()
            setpasswordError(true)
            return
        } else {
            setpasswordError(false)
        }
        if (!isOldPasswordValid) {
            setErrorMessage('Old password does not match.')
            setErrorType('error')
            handleShowError()
            setOldPasswordError(true)
            return
        } else {
            setOldPasswordError(false)
        }
        if (!isPasswordMatch) {
            setErrorMessage('New password does not match with confirm password.')
            setErrorType('error')
            handleShowError()
            setConNewPasswordError(true)
            return
        } else {
            setConNewPasswordError(false)
        }
        setErrorMessage('Done.')
        setErrorType('success')
        handleShowError()
        setTimeout(() => {
            navigation.goBack()
        }, 2000)
    }

    return (
        <View style={styles.container}>
            <CustomErrorModal
                visible={errorVisible}
                setModalVisible={setErrorVisible}
                message={errorMessage}
                type={errorType}
            />
            <CustomInputText
                label="Old Transaction Passowrd"
                onchange={setOldPassword}
                password={true}
                error={oldPasswordError}
            />
            <CustomInputText
                label="New Transaction Passowrd"
                onchange={setNewPassword}
                password={true}
            />
            <CustomInputText
                label="Confirm Transaction Passowrd"
                onchange={setConNewPassword}
                password={true}
                error={conNewPasswordError}
            />
            <View style={{ flex: 1 }}></View>
            <CustomButton
                label="Confirm"
                onPress={handleConfirm}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
    }
})

export default TransactionPassword
