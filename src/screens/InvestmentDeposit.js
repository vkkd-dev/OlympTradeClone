import { StyleSheet, Text, View, TouchableOpacity, Modal, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomInputText from '../components/CustomInputText'
import { MyColors } from '../../assets/MyColors';
import CustomPicker from '../components/CustomPicker'
import DatePciker from 'react-native-modern-datepicker'
import { getToday, getFormatedDate } from 'react-native-modern-datepicker'
import CustomTablet from '../components/CustomTablet'

const InvestmentDeposit = () => {
    const [paymentTo, setPaymentTo] = useState(null)
    const [open, setOpen] = useState(false)
    const [date, setDate] = useState("Select date")
    const [depositAmount, setDepositAmount] = useState("")
    const [token, setToken] = useState("")
    const [transaction, setTransaction] = useState("")
    const today = new Date()
    const startDate = getFormatedDate(today.setDate(today.getDate() + 1), 'YYY/MM/DD')
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null)
    const [image, setImage] = useState(null);

    // useEffect(() => {
    //     (async ()=> {
    //         const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync()
    //         setHasGalleryPermission(galleryStatus.status === 'granted')
    //     })()
    // }, [])

    // const pickImage = async () => {
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //       allowsEditing: false,
    //       quality: 1,
    //     });


    //     if (!result.canceled) {
    //         setImage(result.assets[0].uri);
    //         console.log(image);
    //     }
    //   };

    // if (hasGalleryPermission === false) {
    //     return <Text>No access</Text>
    // }

    const payments = [
        'Google Pay',
        'PhonePe',
    ];

    const data = [
        ["ID", "PAYMENT MODE", "ACOOUNT NO", "DEPOSIT AMOUNT", "NO OF TOKENS", "DEPOSIT DATE", "TRANSACTION NO", "REQUEST DATE", "STATUS"],
        ['1', 'Google Pay', '6002135465476', '699999', '7000000000', '01/07/2023', '1003', '22/06/2023', 'Active'],
    ];

    const handleDate = () => {
        setOpen(!open)
    }

    const handleDateChange = (propDate) => {
        setDate(propDate)
        setOpen(!open)
    }

    const handlePaymentType = (itemValue) => {
        setPaymentTo(itemValue);
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <CustomPicker
                    label="Choose Depositing Type"
                    value={paymentTo}
                    onValueChange={handlePaymentType}
                    data={payments}
                />
                <CustomInputText
                    label={"Pay to"}
                    value={paymentTo}
                    onchange={setPaymentTo}
                />
                <TouchableOpacity style={styles.dateContainer} onPress={handleDate}>
                    <Text style={date === 'Select date' ? styles.dateText : styles.datePlaceHolder}>{date}</Text>
                </TouchableOpacity>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={open}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <DatePciker
                                mode='calendar'
                                selected={startDate}
                                onDateChange={handleDateChange}
                                style={{
                                    backgroundColor: MyColors.cardBackground,
                                }}
                            />
                            <TouchableOpacity style={styles.dateContainer} onPress={handleDate}>
                                <Text style={styles.dateText}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <CustomInputText
                    label={"Deposit Amount"}
                    type={'phone-pad'}
                    value={depositAmount}
                    onchange={setDepositAmount}
                />
                <CustomInputText
                    label={"No of Token"}
                    type={'phone-pad'}
                    value={token}
                    onchange={setToken}
                />
                <CustomInputText
                    label={"Transaction No."}
                    type={'phone-pad'}
                    value={transaction}
                    onchange={setTransaction}
                />
                <TouchableOpacity style={styles.receiptContainer}>
                    {image === null ? <Text style={styles.dateText}>Payment Receipt</Text> : <View style={styles.imageContainer}><Image source={{ uri: image }} style={styles.img} /></View>}
                    {/* { image === null ? <Feather name="image" size={24} color={MyColors.white} style={{marginEnd: 20}} onPress={pickImage}/> : <Ionicons name="ios-remove-circle-outline" size={24} color={MyColors.white} style={{marginEnd: 20}} />} */}
                </TouchableOpacity>
                <Text style={styles.title}>Today's Report</Text>
                <CustomTablet
                    data={data}
                    width={170}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
    },
    dateContainer: {
        backgroundColor: MyColors.cardBackground,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        marginBottom: 20,
    },
    receiptContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: MyColors.cardBackground,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        marginBottom: 20,
    },
    dateText: {
        padding: 10,
        color: MyColors.textSecondary,
        letterSpacing: 0.5,
        fontWeight: '400',
        fontSize: 16,
    },
    datePlaceHolder: {
        padding: 10,
        color: MyColors.white,
        letterSpacing: 0.5,
        fontWeight: '400',
        fontSize: 16,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: MyColors.cardBackground,
        borderRadius: 20,
        width: '80%',
        padding: 35,
        alignItems: 'center',
    },
    title: {
        color: MyColors.white,
        fontSize: 25,
        fontWeight: 'bold',
    },
    imageContainer: {
        margin: 10,
    },
    img: {
        height: 50,
        width: 100,
        borderRadius: 5
    }
})

export default InvestmentDeposit