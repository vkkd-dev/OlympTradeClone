import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MyColors } from '../../assets/MyColors';

const TerminalControlers = () => {
    const [currentTime, setCurrentTime] = useState(3)
    const [currentAmount, setCurrentAmount] = useState(19)

    const timeIntervals = [
        5, 15, 30, 45, 60, 120, 180, 240, 300,
        360, 420, 480, 540, 600, 900, 1200, 1500,
        1800, 3600, 7200, 10800, 14400, 18000, 21600,
        25200, 28800, 32400, 36000, 39600, 43200,
        46800, 50400, 54000, 57600, 61200, 64800,
        68400, 72000, 75600, 82800
    ];

    const amountIntervals = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        15, 20, 25, 30, 35, 40, 45, 50,
        60, 70, 80, 90, 100, 150, 200,
        250, 300, 350, 400, 450, 500,
        600, 700, 800, 900, 1000, 2000, 3000
    ];

    const formatTime = (seconds) => {
        if (seconds < 60) {
            return `${seconds} sec`
        } else if (seconds < 3600) {
            const minutes = Math.floor((seconds % 3600) / 60);
            return `${minutes} min`
        } else {
            const hours = Math.floor(seconds / 3600);
            return `${hours} h`
        }
    }

    const formatAmount = (amount) => {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    const onMinusPress = () => {
        if (currentTime > 0)
            setCurrentTime(currentTime - 1)
    }

    const onPlusPress = () => {
        if (currentTime < timeIntervals.length - 1)
            setCurrentTime(currentTime + 1)
    }

    const onAmountMinusPress = () => {
        if (currentAmount > 0)
            setCurrentAmount(currentAmount - 1)
    }

    const onAmountPlusPress = () => {
        if (currentAmount < amountIntervals.length - 1)
            setCurrentAmount(currentAmount + 1)
    }


    return (
        <View style={styles.controlersContainer}>
            <View style={styles.container}>
                <TouchableOpacity onPress={onMinusPress}>
                    <Icon name="minus" size={24} color={MyColors.white} />
                </TouchableOpacity>
                <Text style={styles.text}>{formatTime(timeIntervals[currentTime])}</Text>
                <TouchableOpacity onPress={onPlusPress}>
                    <Icon name="plus" size={24} color={MyColors.white} />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <TouchableOpacity onPress={onAmountMinusPress}>
                    <Icon name="minus" size={24} color={MyColors.white} />
                </TouchableOpacity>
                <Text style={styles.text}>₹ {formatAmount(amountIntervals[currentAmount])}</Text>
                <TouchableOpacity onPress={onAmountPlusPress}>
                    <Icon name="plus" size={24} color={MyColors.white} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    controlersContainer: {
        flexDirection: 'row',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: MyColors.secondary,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginHorizontal: 5,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    text: {
        fontSize: 17,
        fontWeight: '300',
        marginLeft: 16,
        marginRight: 16,
        color: MyColors.white,
    },
});

export default TerminalControlers;
