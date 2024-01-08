import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MyColors } from '../../assets/MyColors';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';

const EventCards = ({ title, subtitle1, subtitle2, description, img, theme, gradient }) => {
    return (
        <View style={styles.cardContainer}>
            <ImageBackground
                source={img}
                style={styles.imageBackground}
                resizeMode="cover"
            >
                      <LinearGradient
                            colors={[gradient, 'transparent']}
                            start={{ x: 0, y: 0 }} // Start from the left side
                            end={{ x: 1, y: 0 }} // Fade towards the right side
                            style={styles.gradient}
                        />
                <View style={styles.overlay}>
                    <View style={styles.tagCotainer}>
                        <Text style={styles.tag}>HAPPENING NOW</Text>
                    </View>
                    <Text style={styles.title}>{title}</Text>
                    <View>
                        <Text style={styles.subtitle1}>{subtitle1}</Text>
                        <Text style={styles.subtitle2}>{subtitle2}</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: theme,
                        paddingVertical: 15,
                    }}>
                        <View>
                            <Text style={styles.descriptionTitle}>Ends in</Text>
                            <Text style={styles.descriptionSubtitle}>{description}</Text>
                        </View>
                        <TouchableOpacity style={styles.iconContainer}>
                            <Entypo name="chevron-small-right" size={20} color={MyColors.white} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '90%',
        height: 350,
        borderRadius: 12,
        overflow: 'hidden',
        marginVertical: 15,
        alignSelf: 'center',
        elevation: 4, // Add elevation to give the card a shadow effect (for Android)
        shadowColor: 'black', // For iOS
        shadowOffset: { width: 0, height: 2 }, // For iOS
        shadowOpacity: 0.2, // For iOS
    },
    imageBackground: {
        flex: 1,
    },
    overlay: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Add a semi-transparent overlay on the image
    },
    title: {
        width: '50%',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 5,
        marginStart: 20,
    },
    subtitle1: {
        color: MyColors.lightGray1,
        fontSize: 13,
        marginStart: 20,
    },
    subtitle2: {
        color: MyColors.white,
        fontSize: 20,
        fontWeight: 'bold',
        marginStart: 20,
    },
    tagCotainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        alignSelf: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginTop: 15,
        marginStart: 15,
        borderRadius: 10,
    },
    tag: {
        fontSize: 14,
        color: 'white',
        marginBottom: 5,
        alignSelf: 'center',
    },
    descriptionTitle: {
        fontSize: 15,
        color: 'rgba(255, 255, 255, 0.8)',
        marginStart: 20,
    },
    descriptionSubtitle: {
        fontSize: 20,
        color: 'rgba(255, 255, 255, 0.7)',
        marginStart: 20,
        fontWeight: 'bold',
    },
    iconContainer: {
        alignSelf: 'center',
        marginEnd: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        padding: 10,
        borderRadius: 20,
    },
    gradient: {
        ...StyleSheet.absoluteFillObject, // Take the full space of the container
      },
})

export default EventCards