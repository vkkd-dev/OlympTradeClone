import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomInputText from '../components/CustomInputText'
import CustomButton from '../components/CustomButton'
import { MyColors } from '../../assets/MyColors';
import CustomPicker from '../components/CustomPicker'

const MemberRegistration = () => {

    const [name, setName] = useState("")
    const [country, setCountry] = useState(null)
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")

    const countries = [
        "United States",
        "China",
        "India",
        "Russia",
        "Brazil",
        "United Kingdom",
        "Germany",
        "Japan"
    ];


    handleCountryChange = ({ item }) => {
        setCountry(item)
        console.log(country)
    }

    handleDeposite = () => {
        console.log('pressed')
    }

    const addMember = () => {
        console.log('pressed')
    }

    return (
        <View style={styles.container}>
            <CustomInputText label="Full Name" password={false} value={name} onchange={setName} />
            <CustomPicker
                label="Select a country"
                value={country}
                country={handleCountryChange}
                data={countries}
            />
            <CustomInputText
                label="Contact No"
                type={'phone-pad'}
                value={phone}
                onchange={setPhone}
            />
            <CustomInputText
                label="Email"
                type={'email-address'}
                value={email}
                onchange={setEmail}
            />
            <CustomInputText
                label="Password"
                password={true}
                value={password}
                onchange={setPassword} />
            <CustomInputText
                label="Confirm Password"
                password={true}
                value={confirmpassword}
                onchange={setConfirmpassword} />
            <CustomButton
                label="Add Member"
                onPress={addMember} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        marginTop: 20,
    },
    pickerContainer: {
        backgroundColor: MyColors.cardBackground,
        marginBottom: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderBlockColor: 'rgba(255, 255, 255, 0.1)'
    },
})

export default MemberRegistration
