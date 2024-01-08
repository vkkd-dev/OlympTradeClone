import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MyColors } from '../../assets/MyColors';
import Octicons from 'react-native-vector-icons/Octicons';

const ProfileInfo = ({uname, uid}) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.unameText}>{uname}</Text>
                <View>
                </View>
                <Text style={styles.uidPreText}>
                    USER ID:
                    <Text style={styles.uidText}>
                        {uid}
                    </Text>
                </Text>
            </View>
            <View style={styles.iconContainer}>
                <Octicons name="person" size={40} color={MyColors.white}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    unameText: {
        color: MyColors.white,
        fontWeight: 'bold',
        fontSize: 25,
        letterSpacing: 1,
    },
    uidPreText: {
        color: MyColors.textSecondary,
        fontSize: 13,
    },
    uidText: {
        color: MyColors.primary,
        fontSize: 15,
        fontStyle: 'italic',
    },
    iconContainer: {
        backgroundColor: MyColors.cardBackground,
        borderRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
})

export default ProfileInfo
