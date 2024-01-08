import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Modal from 'react-native-modal';
import { MyColors } from '../../assets/MyColors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const BottomSheetPayments = ({ isVisible, closeModal }) => {
    return (
        <Modal
            isVisible={isVisible}
            style={styles.modal}
            onBackdropPress={closeModal}
            onBackButtonPress={closeModal}
            backdropOpacity={0.5}
            backdropColor="black"
            animationIn="slideInUp"
            animationOut="slideOutDown"
        >
            <View style={styles.bottomSheetContainer}>
                <Ionicons name="remove" size={100} color={MyColors.cardBackground} style={{ alignSelf: 'center', marginVertical: -35 }} />
                <TouchableOpacity style={styles.header} onPress={() => console.log('Payments')}>
                    <Text style={styles.buttonText}>Payments</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer1} onPress={() => console.log('Deposit')}>
                    <Ionicons name="wallet-outline" size={25} color={MyColors.white} />
                    <View style={styles.buttonTextContainer}>
                        <Text style={styles.buttonText}>Deposit</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer2} onPress={() => console.log('Withdraw')}>
                    <MaterialCommunityIcons name="export-variant" size={25} color={MyColors.white} />
                    <View style={styles.buttonTextContainer}>
                        <Text style={styles.buttonText}>Withdraw</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer2} onPress={() => console.log('Transfer')}>
                    <MaterialCommunityIcons name="bank-transfer" size={25} color={MyColors.white} />
                    <View style={styles.buttonTextContainer}>
                        <Text style={styles.buttonText}>Transfer</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer2} onPress={() => console.log('Transactions')}>
                    <MaterialIcons name="import-export" size={25} color={MyColors.white} />
                    <View style={styles.buttonTextContainer}>
                        <Text style={styles.buttonText}>Transactions</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

export default BottomSheetPayments

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    bottomSheetContainer: {
        backgroundColor: MyColors.background,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 16,
        paddingBottom: 30,
    },
    header: {
        marginBottom: 15,
    },
    buttonContainer1: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: MyColors.primary,
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    buttonContainer2: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: MyColors.cardBackground,
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
    },
    buttonTextContainer: {
        flex: 1,
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: MyColors.white,
        textAlign: 'center',
    },
})