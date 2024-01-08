import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker'
import { MyColors } from '../../assets/MyColors';

const CustomPicker = ({ label, value, onValueChange, data }) => {
    return (
        <View style={styles.pickerContainer}>
            <Picker
                selectedValue={value}
                onValueChange={(itemValue) => onValueChange(itemValue)}
                dropdownIconColor={MyColors.darkGray}
                style={styles.picker}
            >
                <Picker.Item
                    label={label}
                    color={MyColors.textSecondary}
                    value={null}
                />
                {data.map((payment, index) => (
                    <Picker.Item
                        key={index}
                        label={payment}
                        value={payment}
                        color={MyColors.black}
                    />
                ))}
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    pickerContainer: {
        backgroundColor: MyColors.cardBackground,
        marginBottom: 20,
        borderRadius: 10,
        borderWidth: 1,
        height: 60,
        borderBlockColor: 'rgba(255, 255, 255, 0.1)'
    },
    picker: {
        backgroundColor: MyColors.cardBackground,
    }
})

export default CustomPicker
