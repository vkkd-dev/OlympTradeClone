import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-paper';
import { MyColors } from '../../assets/MyColors';
import Controlers from '../components/TerminalControlers';
import TerminalHeader from '../components/TerminalHeader';
import TerminalTopBar from '../components/TerminalTopBar';
import CandlestickChart from '../components/CandlestickChart';
import BottomSheetPayments from '../components/BottomSheetPayments';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/action';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const TerminalScreen = () => {

  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.reducer)
  const [isExist, setisExist] = useState(false)
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false)
  const item = "hello"

  // useEffect(() => {
  //   if (cartItems) {
  //     cartItems.forEach((element) => {
  //       if (element === "hello") {
  //         setisExist(true)
  //       }
  //     })
  //   }
  
  //   let result = cartItems.filter((element) => {
  //     return element === item
  //   })
  //   if (result.length) {
  //     setisExist(true)
  //   } else {
  //     setisExist(false)
  //   }
  // }, [cartItems])

  const openBottomSheet = () => {
    setBottomSheetVisible(true)
  }

  const closeBottomSheet = () => {
    setBottomSheetVisible(false)
  }

  const handleDown = (item) => {
    dispatch(addToCart(item))
  }

  const handleRemove = (item) => {
    dispatch(removeFromCart(item))
  }

  return (
    <View style={styles.container}>

      <TerminalHeader onPressResponse={openBottomSheet} />
      <TerminalTopBar />
      <View style={styles.contentContainer}>
        <CandlestickChart />
      </View>

      <View style={styles.profitContainer}>
        <Text style={styles.profitTxt}>Profitability: 84%</Text>
        <Text style={styles.profitAmount}>+D58.80</Text>
        <AntDesign name="questioncircle" size={10} color={MyColors.white} />
      </View>

      <Controlers />

      {/* Buttons and Icon at the bottom */}
      <View style={styles.buttonContainer}>
          <Button
            icon={({ color, size }) => (
              <Icon name="arrow-bottom-right" size={size} color={color} />
            )}
            mode="contained"
            style={[styles.button, styles.greenButton]} // Use both button styles
            labelStyle={styles.buttonLabel}
            contentStyle={styles.buttonContent}
            onPress={() => {
              handleDown(item)
            }}
          >
            Down
          </Button>

        <TouchableOpacity style={{ padding: 10, backgroundColor: MyColors.secondary, borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.2)', borderRadius: 10 }}>
          <AntDesign name="clockcircleo" size={20} color={MyColors.white} />
        </TouchableOpacity>

        <Button
          icon={({ color, size }) => (
            <Icon name="arrow-top-right" size={size} color={color} />
          )}
          mode="contained"
          style={[styles.button, styles.redButton]}
          labelStyle={styles.buttonLabel}
          contentStyle={styles.buttonContent}
          onPress={() => {
            handleRemove(item)
          }}
        >
          Up
        </Button>
      </View>

      <BottomSheetPayments isVisible={isBottomSheetVisible} closeModal={closeBottomSheet} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MyColors.background,
    padding: 10,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profitContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profitTxt: {
    color: MyColors.textSecondary,
  },
  profitAmount: {
    color: MyColors.white,
    marginHorizontal: 7,
    marginVertical: 7,
  },
  text: {
    fontSize: 24,
    fontStyle: 'italic',
    color: 'white', // Text color set to white
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Center buttons and icon horizontally
    alignItems: 'center', // Center buttons and icon vertically
  },
  button: {
    flex: 1, // Let the buttons take equal space
    marginHorizontal: 8,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'flex-start', // Align text to the left side
    height: 50,
  },
  greenButton: {
    backgroundColor: 'green', // Green background color
  },
  redButton: {
    backgroundColor: 'red', // Red background color
  },
  buttonLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonContent: {
    flexDirection: 'row', // Align text and icon in a row
    justifyContent: 'space-between', // Align text and icon to the left side
  },
  iconButton: {
    backgroundColor: '#00060e',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: 48,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
});

export default TerminalScreen